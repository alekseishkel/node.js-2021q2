import { logError } from './logger';

const uncaughtException = (error: Error) => {
  logError(`uncaughtException: ${error.message}`);
};

const unhandledRejection = (reason: Error) => {
  logError(`unhandledRejection: ${reason.message}`);
};

export { uncaughtException, unhandledRejection };
