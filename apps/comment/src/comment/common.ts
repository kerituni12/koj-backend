import { OutgoingResponse } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { ConsumerDeserializer, IncomingRequest } from '@nestjs/microservices';

export interface Serializer<TInput = any, TOutput = any> {
  serialize(value: TInput): TOutput;
}
export interface Deserializer<TInput = any, TOutput = any> {
  deserialize(value: TInput, options?: Record<string, any>): TOutput;
}

export class OutboundResponseIdentitySerializer implements Serializer {
  private readonly logger = new Logger('OutboundResponseIdentitySerializer');
  serialize(value: any): OutgoingResponse {
    this.logger.debug(`-->> Serializing outbound response: \n${JSON.stringify(value)}`);
    return value;
  }
}

export class InboundMessageIdentityDeserializer implements ConsumerDeserializer {
  private readonly logger = new Logger('InboundMessageIdentityDeserializer');

  deserialize(value: any, options?: Record<string, any>): IncomingRequest {
    this.logger.verbose(
      `<<-- deserializing inbound message:\n${JSON.stringify(
        value,
      )}\n\twith options: ${JSON.stringify(options)}`,
    );
    return value;
  }
}
