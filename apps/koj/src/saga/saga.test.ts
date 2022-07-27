import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConsumerService } from '../kafka/consumer.service';
import { SagaDefinitionBuilder } from './saga-builder';
import { SagaProcessor } from './saga-processor';

@Injectable()
export class TestSaga implements OnModuleInit {
  private sagaBuilder: SagaProcessor;
  constructor(private readonly consumerService: ConsumerService) {}

  async buildSaga() {
    const sagaDefinitionBuilder = new SagaDefinitionBuilder()
      .step('FlightBookingService')
      .onReply(async (payload) => {
        // invoke Flight Booking Service API to reserve flight ticket
        console.log('STEP1 FORWARD', payload);
      })
      .withCompensation(async () => {
        // invoke Flight Booking Service API to roll back previosly reserved ticket
        console.log('STEP1 COMPENSATION');
      })
      .step('HotelBookingService')
      .onReply(async (payload) => {
        console.log('STEP1.2 ', payload);
      })
      .withCompensation(async () => {
        console.log('STEP1.2 COMPENSATION');
      })
      .step('PaymentService')
      .onReply(async (payload) => {
        console.log('step 2', payload);
        throw new Error('hello');
      })
      .withCompensation(async () => {
        console.log('STEP2 COMPENSATION');
      });

    const sagaProcessor = await sagaDefinitionBuilder.build();
    return sagaProcessor;
  }

  saga() {
    this.sagaBuilder.start({ id: 1 });
  }

  async onModuleInit() {
    this.sagaBuilder = await this.buildSaga();
  }
}
