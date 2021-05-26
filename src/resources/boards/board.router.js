const router = require('express').Router();
const boardService = require('./board.service');
const tasksService = require('../tasks/task.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAllBoards();
  res.json(boards);
});

router.route('/:id').get(async (req, res) => {
  const board = await boardService.getBoard(req.params.id);

  if (board) {
    res.status(200).json(board);
  } else {
    res.status(404).json('Board not found');
  }
});

router.route('/').post(async (req, res) => {
  const board = await boardService.addBoard(req.body);
  res.status(201).json(board);
});

router.route('/:id').put(async (req, res) => {
  const board = await boardService.updateBoard(req.params.id, req.body);

  if (board) {
    res.status(200).json(board);
  } else {
    res.status(404).json('Board not found');
  }
});

router.route('/:id').delete(async (req, res) => {
  const board = await boardService.deleteBoard(req.params.id);
  await tasksService.deleteBoardTasks(req.params.id);

  if (board) {
    res.status(200).json(board);
  } else {
    res.status(404).json('Board not found');
  }
});

module.exports = router;
