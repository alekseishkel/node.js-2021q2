import { Request, Response } from 'express';
import { DeleteResult } from 'typeorm';
import { User } from "./user.model";
import { taskService } from '../tasks/task.service';
import { usersService } from './user.service';
import { UserEntity } from '../../entities/user.entity';

const router = require('express').Router();

router.route('/').get(async (_req : Request, res : Response) : Promise<void> => {
  const users : Array<UserEntity> = await usersService.getAllUsers();
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req : Request, res : Response) : Promise<void> => {
  const user : UserEntity | undefined = await usersService.getUser(req.params["id"]);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json('User not found');
  }
});

router.route('/').post(async (req : Request, res : Response) : Promise<void> => {
  const user : UserEntity = await usersService.addUser(req.body);
  res.status(201).json(User.toResponse(user));
});

router.route('/:id').put(async (req : Request, res : Response) : Promise<void> => {
  const user : UserEntity | undefined = await usersService.updateUser(req.params["id"], req.body);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json('User not found');
  }
});

router.route('/:id').delete(async (req : Request, res : Response) : Promise<void> => {
  const user : DeleteResult = await usersService.deleteUser(req.params["id"]!);
  await taskService.deleteUserTasks(req.params["id"]!);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json('User not found');
  }
});

export { router };
