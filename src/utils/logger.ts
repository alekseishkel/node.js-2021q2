import { createLogger, format, transports } from 'winston'

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.colorize(),
    format.cli()
  ),
  transports: [
    new transports.Console(),

    new transports.File({
      filename: 'logs/info.log',
      format: format.json(),
    }),

    new transports.File({
      filename: 'logs/error.log',
      format: format.json(),
      level: 'error',
    }),
  ],
});

const logInfo = (message: string): void => {
  logger.info(message);
};

const logError = (message: string): void => {
  logger.error(message);
};

export { logInfo, logError };