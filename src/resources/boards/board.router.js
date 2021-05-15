const router = require('express').Router();
const Board = require('./board.model');
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAllBoards();
  res.json(boards);
});

// router.route('/:id').get(async (req, res) => {
//   const user = await usersService.getUser(req.params.id);
//   res.json(User.toResponse(user));
// });

// router.route('/').post(async (req, res) => {
//   const user = await usersService.addUser(req.body);
//   res.status(201).json(User.toResponse(user));
// });

// router.route('/:id').put(async (req, res) => {
//   const user = await usersService.updateUser(req.params.id, req.body);
//   res.json(User.toResponse(user));
// });

// router.route('/:id').delete(async (req, res) => {
//   const user = await usersService.deleteUser(req.params.id);
//   res.json(User.toResponse(user));
// });

module.exports = router;
