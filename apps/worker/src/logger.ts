import Pino, { Logger } from 'pino';
import { LoggerOptions } from 'pino';
import pretty from 'pino-pretty';
const stream = pretty({
  colorize: true
})
export const loggerOptions: LoggerOptions = {
    level: 'info',
    formatters: {
        level(label) {
            return { level: label };
        }
    },
    
};

const logger: Logger = Pino(loggerOptions, stream);

export default logger