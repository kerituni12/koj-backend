import Pino from 'pino';
import pretty from 'pino-pretty';
const stream = pretty({
  colorize: true
});
export const loggerOptions: Pino.LoggerOptions = {
  level: 'info',
  formatters: {
    level(label) {
      return { level: label };
    }
  }
};

const logger: Pino.Logger = Pino(loggerOptions, stream);

export default logger;
