/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { tracer } from '@/tracing/tracer';
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';

import { GqlExceptionFilter, GqlContextType } from '@nestjs/graphql';
import { context, trace } from '@opentelemetry/api';
import { Prisma } from '@prisma/client';

const defaultInternalException = {
  message: 'Co loi tu he thong',
  statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
  level: 'error',
};

@Catch()
export class AllExceptionsFilter implements ExceptionFilter, GqlExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const span = tracer.startSpan('exception');
    trace.setSpan(context.active(), span);
    span.recordException(exception);

    console.log(
      '🚀 ~ file: exceptions.ts ~ line 18 ~ AllExceptionsFilter ~ exception',
      exception,
    );

    if (exception instanceof Prisma.PrismaClientValidationError) {
      exception = new BadRequestException(exception.message);
    }

    if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      if (exception.code === 'P2002') {
        exception = new ConflictException('Resource already exist');
      } else {
        exception = new InternalServerErrorException({
          ...defaultInternalException,
          info: exception.code,
        });
      }
    }

    // Internal error . Only http exception have getStatus
    if (!exception.getStatus) {
      exception = new InternalServerErrorException(defaultInternalException);
    }
    const ctx = host.switchToHttp();
    const statusCode = exception.getStatus();

    if (host.getType<GqlContextType>() === 'graphql') {
      // Graphql must include statusCode in exception to exclude stacktrace
      const { level = 'unset', ...execptionResponse } = exception.getResponse();
      execptionResponse.statusCode = statusCode;
      span.setAttributes({
        exceptionLevel: level,
      });
      span.end();
      return new HttpException(execptionResponse, statusCode);
    }

    const { level = 'unset', ...execptionResponse } = exception.getResponse();
    const response = ctx.getResponse();
    span.setAttributes({
      exceptionLevel: level,
    });
    span.end();
    return response.status(statusCode).json(execptionResponse);
  }
}
