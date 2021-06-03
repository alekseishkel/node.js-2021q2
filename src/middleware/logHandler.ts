import { Request, Response, NextFunction } from 'express';

const logHandler = (req: Request, res: Response, next: NextFunction): void => {
  const {url, body, query} = req;
  const { statusCode } = res;
  console.log(url, body, query, statusCode);
  next();
}

export {logHandler};