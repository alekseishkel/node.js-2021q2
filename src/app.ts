import express, { Request, Response, NextFunction } from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import { router as userRouter } from './resources/users/user.router';
import { router as boardRouter } from './resources/boards/board.router';
import { router as taskRouter } from './resources/tasks/task.router';
import { router as loginRouter } from './resources/login/login.router';
import { logHandler } from './middleware/logHandler';
import { errorHandler } from './middleware/errorHandler';
import { uncaughtException, unhandledRejection } from './utils/errorsListeners'; 

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

process.on('uncaughtException', uncaughtException);
process.on('unhandledRejection', unhandledRejection);

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use(logHandler);

app.use('/users', userRouter);
app.use('/boards', boardRouter, taskRouter);
app.use('/login', loginRouter)

app.use(errorHandler);

export { app };
