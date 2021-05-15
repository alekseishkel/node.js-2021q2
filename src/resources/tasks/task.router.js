const router = require('express').Router();
const taskService = require('./task.service');

router.route('/:boardId/tasks').get(async (req, res) => {
  const tasks = await taskService.getAllTasks();
  res.json(tasks);
});

router.route('/:boardId/tasks/:taskId').get(async (req, res) => {
  const task = await taskService.getTask(req.params.taskId);

  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).json('Task not found');
  }
});

router.route('/:boardId/tasks').post(async (req, res) => {
  const task = await taskService.addTask(req.body);
  res.status(201).json(task);
});

router.route('/:boardId/tasks/:taskId').put(async (req, res) => {
  const task = await taskService.updateTask(req.params.taskId, req.body);

  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).json('Task not found');
  }
});

router.route('/:boardId/tasks/:taskId').delete(async (req, res) => {
  const board = await taskService.deleteTask(req.params.taskId);

  if (board) {
    res.status(200).json(board);
  } else {
    res.status(404).json('Task not found');
  }
});

module.exports = router;
