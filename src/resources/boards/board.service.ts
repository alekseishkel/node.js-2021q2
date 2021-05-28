const boardsRepo = require('./board.memory.repository');
const Board = require('./board.model');

/**
 * Gets all the boards from the boards repository
 * @returns {Promise<Array<Board>>} Promise object represents the array of boards
 */
const getAllBoards = () => boardsRepo.getAllBoards();

/**
 * Passes the board id to the boards repository 
 * and gets the board by this id
 * @param {string} id - id of the requested board 
 * @returns {Promise<Board>} Promise object represents the board
 */
const getBoard = (id) => boardsRepo.getBoard(id);

/**
 * Сreates a new board depending on the received data
 * and passes the board to the repository
 * @param {object} boardData - the data for the new board
 * @returns {Board} Created board
 */
const addBoard = (boardData) => {
  const board = new Board(boardData);
  boardsRepo.addBoard(board);

  return board;
};

/**
 * Сreates a new board depending on the received data
 * and passes this board and the id of the board
 * that needs to be updated to the repository 
 * @param {string} id - id of updating board
 * @param {object} boardData - the data for the new board
 * @returns {Promise<Board>} Promise object represents the updated board
 */
const updateBoard = (id, boardData) => {
  const board = new Board(boardData);
  return boardsRepo.updateBoard(id, board);
};

/**
 * Passes the id of the board that needs to be deleted 
 * to the repository
 * @param {string} id - id of deleting board
 * @returns {Promise<Board>} Promise object represents the deleted board
 */
const deleteBoard = (id) => boardsRepo.deleteBoard(id);

module.exports = { getAllBoards, addBoard, getBoard, updateBoard, deleteBoard };