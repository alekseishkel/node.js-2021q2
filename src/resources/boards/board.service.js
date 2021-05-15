const boardsRepo = require('./board.memory.repository');
const User = require('./board.model');

const getAllBoards = () => boardsRepo.getAllBoards();

const getBoard = (id) => boardsRepo.getBoard(id);

const addBoard = (boardData) => {
  const board = new User(boardData);
  boardsRepo.addBoard(board);

  return board;
};

// const updateUser = (id, userData) => {
//   const user = new User(userData);
//   return usersRepo.updateUser(id, user);
// };

// const deleteUser = (id) => usersRepo.deleteUser(id);

module.exports = { getAllBoards, addBoard, getBoard };
