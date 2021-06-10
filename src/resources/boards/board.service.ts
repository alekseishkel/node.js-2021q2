import { boardsRepo } from './board.memory.repository';
import { Board } from './board.model';
import { IBoard } from '../../interfaces/interfaces';

/**
 * Gets all the boards from the boards repository
 * @returns {Promise<Array<Board>>} Promise object represents the array of boards
 */
const getAllBoards = () : Promise<Array<IBoard>> => boardsRepo.getAllBoards();

/**
 * Passes the board id to the boards repository 
 * and gets the board by this id
 * @param {string} id - id of the requested board 
 * @returns {Promise<Board>} Promise object represents the board
 */
const getBoard = (id : string | undefined) : Promise<IBoard | undefined> => boardsRepo.getBoard(id);

/**
 * Сreates a new board depending on the received data
 * and passes the board to the repository
 * @param {object} boardData - the data for the new board
 * @returns {Board} Created board
 */
const addBoard = (boardData: object) : IBoard => {
  const board : IBoard = new Board(boardData);
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
const updateBoard = (id : string | undefined, boardData: IBoard) : Promise<IBoard | undefined> => {
  const board : IBoard = new Board(boardData);
  return boardsRepo.updateBoard(id, board);
};

/**
 * Passes the id of the board that needs to be deleted 
 * to the repository
 * @param {string} id - id of deleting board
 * @returns {Promise<Board>} Promise object represents the deleted board
 */
const deleteBoard = (id : string | undefined) : Promise<IBoard | undefined> => boardsRepo.deleteBoard(id);

export const boardService = { 
  getAllBoards, 
  addBoard, 
  getBoard, 
  updateBoard, 
  deleteBoard 
};
