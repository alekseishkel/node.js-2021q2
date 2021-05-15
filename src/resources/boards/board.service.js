const boardsRepo = require('./board.memory.repository');
const Board = require('./board.model');

const getAllBoards = () => boardsRepo.getAllBoards();

const getBoard = (id) => boardsRepo.getBoard(id);

const addBoard = (boardData) => {
  const board = new Board(boardData);
  boardsRepo.addBoard(board);

  return board;
};

const updateBoard = (id, boardData) => {
  const board = new Board(boardData);
  return boardsRepo.updateBoard(id, board);
};

const deleteBoard = (id) => boardsRepo.deleteBoard(id);

module.exports = { getAllBoards, addBoard, getBoard, updateBoard, deleteBoard };
