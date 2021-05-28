const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const tasksService = require('../tasks/task.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAllUsers();
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getUser(req.params.id);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json('User not found');
  }
});

router.route('/').post(async (req, res) => {
  const user = await usersService.addUser(req.body);
  res.status(201).json(User.toResponse(user));
});

router.route('/:id').put(async (req, res) => {
  const user = await usersService.updateUser(req.params.id, req.body);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json('User not found');
  }
});

router.route('/:id').delete(async (req, res) => {
  const user = await usersService.deleteUser(req.params.id);
  await tasksService.deleteUserTasks(req.params.id);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json('User not found');
  }
});

export { router };