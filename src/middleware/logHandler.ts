import { Request, Response, NextFunction } from 'express';
import { logInfo } from '../utils/logger';

const logHandler = (req: Request, res: Response, next: NextFunction): void => {
  const { method, url, body, query } = req;
  const { statusCode } = res;

  const stringifiedQuery: string = JSON.stringify(query);
  const stringifyBody: string = JSON.stringify(body);

  const message = `Method: ${method}, URL: ${url}, body: ${stringifyBody}, query: ${stringifiedQuery}, statusCode: ${statusCode}`;

  logInfo(message);

  next();
};

export { logHandler };
