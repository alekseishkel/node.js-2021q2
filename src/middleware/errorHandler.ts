import { Request, Response, NextFunction } from 'express';
import { logError } from '../utils/logger';

const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  // eslint-disable-next-line no-unused-vars
  _next: NextFunction
): void => {
  const message = 'Internal Server Error';
  logError(`${error.message}. ${message}`);
  res.status(500).send(message);
};

export { errorHandler };
