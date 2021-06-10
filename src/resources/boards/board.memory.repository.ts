import { IBoard } from '../../interfaces/interfaces';

const boards : Array<IBoard> = [];

/**
 * Gets all the boards from the "database"
 * @returns {Promise<Array<Board>>} Promise object represents the array of boards
 */
const getAllBoards = async () : Promise<Array<IBoard>> => boards;

/**
 * Gets the board by id from the "database"
 * @param {string} id - id of the requested board 
 * @returns {Promise<Board>} Promise object represents the board
 */
const getBoard = async (id : string | undefined) : Promise<IBoard | undefined> => 
  boards.find((board: IBoard) => board.id === id);

/**
 * Add a new board to the "database"
 * @param {object} board - Board
 * @returns {Promise<boards.length>} - new length of boards array
 */
const addBoard = async (board: IBoard) : Promise<number> => boards.push(board);

/**
 * Updates a board depending on the received data
 * @param {string} id - id of updating board
 * @param {Board} Board - the new board
 * @returns {Promise<Board>} Promise object represents the updated board
 */
const updateBoard = async (id : string | undefined, {title, columns} : IBoard) : Promise<IBoard | undefined> => {
  let updatedBoard : IBoard | undefined;
  const updatingBoard : IBoard | undefined = await getBoard(id);

  if (updatingBoard) {
    const updatingBoardIndex : number = boards.findIndex((board : IBoard) => board.id === id);
    updatedBoard = {...updatingBoard, title, columns};
    boards[updatingBoardIndex] = updatedBoard; 
  } else {
    updatedBoard = undefined;
  }

  return updatedBoard;
};

/**
 * Deletes the board from the "database"
 * @param {string} id - id of deleting board
 * @returns {Promise<Board>} Promise object represents the deleted board
 */
const deleteBoard = async (id : string | undefined) : Promise<IBoard | undefined> => {
  const deletingBoard : IBoard | undefined = await getBoard(id);
  
  if (deletingBoard) {
    const deletingingBoardIndex : number = boards.findIndex((board : IBoard) => board.id === id);
    boards.splice(deletingingBoardIndex, 1);
  }
  
  return deletingBoard;
};

export const boardsRepo = { 
  getAllBoards, 
  addBoard, 
  getBoard, 
  updateBoard, 
  deleteBoard 
};
