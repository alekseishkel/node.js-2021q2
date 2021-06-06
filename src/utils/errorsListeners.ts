import { logError } from './logger';

const uncaughtException = (error: Error) => {
  logError(`uncaughtException: ${error.message}`);
}

export { uncaughtException };