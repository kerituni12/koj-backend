import Pino from 'pino';
import { trace, context } from '@opentelemetry/api';

export const loggerOptions: Pino.LoggerOptions = {
  level: 'info',
  timestamp: () => `,"@timestamp":"${new Date().toISOString()}"`,
  formatters: {
    level(label) {
      return { level: label };
    },
    log(object) {
      const span = trace.getSpan(context.active());
      if (!span) return { ...object };
      const { spanId, traceId, traceFlags } = span.spanContext();
      return { ...object, spanId, traceId, traceFlags };
    }
  }
};

export const logger: Pino.Logger = Pino(
  loggerOptions,
  Pino.destination(__dirname + process.env.LOG_FILE_NAME)
);
