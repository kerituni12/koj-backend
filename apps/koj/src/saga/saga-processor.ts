import { Kafka, ITopicConfig, Consumer } from 'kafkajs';
import { Subject, lastValueFrom, take } from 'rxjs';
import { SagaDefinition, SagaMessage, STEP_PHASE } from './saga-builder';

const kafka = new Kafka({ brokers: ['localhost:29092'] });
const admin = kafka.admin();

export class SagaProcessor {
  producer = kafka.producer();
  consumer = kafka.consumer({ groupId: 'saga' });
  myObservable$ = new Subject();

  constructor(private sagaDefinitions: SagaDefinition[]) {}

  async init() {
    await admin.connect();
    await this.producer.connect();
    await this.consumer.connect();

    const stepTopics = this.sagaDefinitions.map((definition) => definition.channelName);

    // create all channles (topics) for all saga steps
    // const kafkaTopics = stepTopics.map((topic): ITopicConfig => ({ topic }));
    // await admin.createTopics({ topics: kafkaTopics });
    console.log('Saga topics created successfully');

    // subscribe to all created channels of all saga steps
    for (const topic of stepTopics) {
      await this.consumer.subscribe({ topic });
    }

    await this.consumer.run({
      eachMessage: async ({ topic, message, partition }) => {
        console.log({
          value: message.value.toString(),
          topic: topic.toString(),
          partition: partition.toString(),
        });
        const sagaMessage = JSON.parse(message.value?.toString()) as SagaMessage;

        const { saga, payload } = sagaMessage;
        const { index, phase } = saga;

        console.log('=== message recived', saga, payload);

        switch (phase) {
          case STEP_PHASE.STEP_FORWARD: {
            const { command, options = {} } =
              this.sagaDefinitions[index].phases[STEP_PHASE.STEP_FORWARD];
            try {
              const result = await command(payload);
              if (options.passResult)
                payload.result[`${this.sagaDefinitions[index].channelName}`] = result;
              await this.makeStepForward(index + 1, payload);
            } catch (e) {
              console.log(
                '🚀 ~ file: saga-processor.ts ~ line 54 ~ SagaProcessor ~ eachMessage: ~ e',
                e,
              );
              await this.makeStepBackward(index - 1, payload);
            }
            return;
          }
          case STEP_PHASE.STEP_BACKWARD: {
            const stepBackward =
              this.sagaDefinitions[index].phases[STEP_PHASE.STEP_BACKWARD].command;
            await stepBackward(payload);
            await this.makeStepBackward(index - 1, payload);
            return;
          }
          default: {
            console.log('UNAVAILBLE SAGA PHASE');
          }
        }
      },
    });
  }

  async makeStepForward(index: number, payload: any) {
    if (index >= this.sagaDefinitions.length) {
      console.log('====> Saga finished and transaction successful');
      return this.myObservable$.next(payload);
      // return payload;
    }
    const message = {
      payload,
      saga: { index, phase: STEP_PHASE.STEP_FORWARD },
    };
    await this.producer.send({
      topic: this.sagaDefinitions[index].channelName,
      messages: [{ value: JSON.stringify(message) }],
    });
  }

  async makeStepBackward(index: number, payload: any) {
    if (index < 0) {
      console.log('===> Saga finished and transaction rolled back');
      return;
    }
    await this.producer.send({
      topic: this.sagaDefinitions[index].channelName,
      messages: [
        {
          value: JSON.stringify({
            payload,
            saga: { index, phase: STEP_PHASE.STEP_BACKWARD },
          }),
        },
      ],
    });
  }

  async start(payload: any) {
    console.log('Saga started');
    payload.result = {};
    this.makeStepForward(0, payload);
    return lastValueFrom(this.myObservable$.pipe(take(1)));
  }
}
