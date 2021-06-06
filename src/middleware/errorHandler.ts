import { Request, Response, NextFunction } from 'express';
import { logError } from '../utils/logger';

// eslint-disable-next-line no-unused-vars
const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  const message = 'Internal Server Error';
  logError(`${error.toString()}. ${message}`);
  res.status(500).send(message);
};

export { errorHandler };
