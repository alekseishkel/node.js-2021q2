import { logError } from './logger';

const uncaughtException = (error: Error): void => {
  logError(`uncaughtException: ${error.message}`);
};

const unhandledRejection = (reason: Error): void => {
  logError(`unhandledRejection: ${reason.message}`);
};

export { uncaughtException, unhandledRejection };
