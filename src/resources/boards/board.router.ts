import { Request, Response } from 'express';
import { boardService } from './board.service';
import { taskService } from '../tasks/task.service';
import { IBoard } from '../../interfaces/interfaces';

const router = require('express').Router();

router.route('/').get(async (_req: Request, res: Response): Promise<void> => {
  const boards: Array<IBoard> = await boardService.getAllBoards();
  res.json(boards);
});

router.route('/:id').get(async (req: Request, res: Response) : Promise<void> => {
  const board : IBoard | undefined = await boardService.getBoard(req.params["id"]);
  
  if (board) {
    res.status(200).json(board);
  } else {
    res.status(404).json('Board not found');
  }
});

router.route('/').post(async (req: Request, res: Response) : Promise<void> => {
  const board : IBoard = await boardService.addBoard(req.body);
  res.status(201).json(board);
});

router.route('/:id').put(async (req: Request, res: Response) : Promise<void> => {
  const board : IBoard | undefined = await boardService.updateBoard(req.params["id"], req.body);

  if (board) {
    res.status(200).json(board);
  } else {
    res.status(404).json('Board not found');
  }
});

router.route('/:id').delete(async (req: Request, res: Response) : Promise<void> => {
  const board : IBoard | undefined = await boardService.deleteBoard(req.params["id"]);
  await taskService.deleteBoardTasks(req.params["id"]);

  if (board) {
    res.status(200).json(board);
  } else {
    res.status(404).json('Board not found');
  }
});

export { router };
