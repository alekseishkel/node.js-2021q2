const router = require('express').Router();
const Board = require('./board.model');
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAllBoards();
  res.json(boards);
});

router.route('/:id').get(async (req, res) => {
  const board = await boardService.getBoard(req.params.id) || "Board no found";
  res.json(board);
});

router.route('/').post(async (req, res) => {
  const board = await boardService.addBoard(req.body);
  res.status(201).json(board);
});

router.route('/:id').put(async (req, res) => {
  const board = await boardService.updateBoard(req.params.id, req.body) || "Board no found";
  console.log(board);
  res.json(board);
});

// router.route('/:id').delete(async (req, res) => {
//   const user = await usersService.deleteUser(req.params.id);
//   res.json(User.toResponse(user));
// });

module.exports = router;
