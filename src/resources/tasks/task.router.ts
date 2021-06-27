import { Request, Response } from 'express';
import { taskService } from './task.service';
import { TaskEntity } from '../../entities/task.entity';

const router = require('express').Router();

router.route('/:boardId/tasks').get(async (_req: Request, res: Response) : Promise<void> => {
  const tasks : Array<TaskEntity> = await taskService.getAllTasks();
  res.json(tasks);
});

router.route('/:boardId/tasks/:taskId').get(async (req: Request, res: Response) : Promise<void> => {
  const task : TaskEntity | undefined = await taskService.getTask(req.params["taskId"]);

  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).json('Task not found');
  }
});

router.route('/:boardId/tasks').post(async (req: Request, res: Response) : Promise<void> => {
  const task : TaskEntity = await taskService.addTask(req.body, req.params["boardId"]);
  res.status(201).json(task);
});

router.route('/:boardId/tasks/:taskId').put(async (req: Request, res: Response) : Promise<void> => {
  const task : TaskEntity | undefined = await taskService.updateTask(req.params["taskId"], req.params["boardId"], req.body,);

  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).json('Task not found');
  }
});

router.route('/:boardId/tasks/:taskId').delete(async (req: Request, res: Response) : Promise<void> => {
  const board = await taskService.deleteTask(req.params["taskId"]!);

  if (board) {
    res.status(200).json(board);
  } else {
    res.status(404).json('Task not found');
  }
});

export { router };
