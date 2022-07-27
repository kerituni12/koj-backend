import { Injectable, OnApplicationShutdown } from '@nestjs/common';
import { Consumer, ConsumerRunConfig, ConsumerSubscribeTopics, Kafka } from 'kafkajs';

@Injectable()
export class ConsumerService implements OnApplicationShutdown {
  private readonly kafka = new Kafka({
    brokers: ['localhost:29092'],
  });
  readonly consumers: Consumer[] = [];
  private readonly HEARTBEAT_CHECK_INTERVAL = 30000;

  async consume(topic: ConsumerSubscribeTopics, config: ConsumerRunConfig) {
    const lastHeartbeat = { date: new Date() };
    const consumer = this.kafka.consumer({
      groupId: 'nestjs-kafka',
      heartbeatInterval: 15000,
    });

    consumer.on('consumer.heartbeat', () => {
      lastHeartbeat.date = new Date();
    });
    consumer.on('consumer.disconnect', () => {
      this.startHeartbeatCheck(lastHeartbeat, consumer, topic, config);
    });

    await consumer.connect();
    await consumer.subscribe(topic);
    await consumer.run(config);

    this.consumers.push(consumer);
  }

  startHeartbeatCheck(lastHeartbeat, consumer: Consumer, topic, config) {
    const interval = setInterval(async () => {
      const now = new Date();
      const heartbBeat =
        lastHeartbeat.date.getTime() < now.getTime() - this.HEARTBEAT_CHECK_INTERVAL;

      if (heartbBeat) {
        console.log(`Last heartbeat was at ${lastHeartbeat.date}`);
        try {
          await consumer.connect();
          await consumer.subscribe(topic);

          clearInterval(interval);

          await consumer.run(config);
          lastHeartbeat.date = new Date();
        } catch (error) {
          console.log(error);
        }
        console.log('affter re-connect');
      }
    }, this.HEARTBEAT_CHECK_INTERVAL);
  }

  async onApplicationShutdown() {
    for (const consumer of this.consumers) {
      await consumer.disconnect();
    }
  }
}
