const boards = [];

/**
 * Gets all the boards from the "database"
 * @returns {Promise<Array<Board>>} Promise object represents the array of boards
 */
const getAllBoards = async () => boards;

/**
 * Gets the board by id from the "database"
 * @param {string} id - id of the requested board 
 * @returns {Promise<Board>} Promise object represents the board
 */
const getBoard = async (id) => boards.find(board => board.id === id);

/**
 * Add a new board to the "database"
 * @param {object} board - Board
 * @returns {Promise<boards.length>} - new length of boards array
 */
const addBoard = async (board) => boards.push(board);

/**
 * Updates a board depending on the received data
 * @param {string} id - id of updating board
 * @param {Board} Board - the new board
 * @returns {Promise<Board>} Promise object represents the updated board
 */
const updateBoard = async (id, {title, columns}) => {
  let updatedBoard;
  const updatingBoard = await getBoard(id);

  if (updatingBoard) {
    const updatingBoardIndex = boards.findIndex(board => board.id === id);
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
const deleteBoard = async (id) => {
  const deletingBoard = await getBoard(id);
  
  if (deletingBoard) {
    const deletingingBoardIndex = boards.findIndex(board => board.id === id);
    boards.splice(deletingingBoardIndex, 1);
  }
  
  return deletingBoard;
};

module.exports = { getAllBoards, addBoard, getBoard, updateBoard, deleteBoard };
