const boards = [];

const getAllBoards = async () => boards;

const getBoard = async (id) => boards.find(board => board.id === id);

const addBoard = async (board) => {
  boards.push(board);
};

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

const deleteBoard = async (id) => {
  const deletingBoard = await getBoard(id);
  
  if (deletingBoard) {
    const deletingingBoardIndex = boards.findIndex(board => board.id === id);
    boards.splice(deletingingBoardIndex, 1);
  }
  
  return deletingBoard;
};

module.exports = { getAllBoards, addBoard, getBoard, updateBoard, deleteBoard };
