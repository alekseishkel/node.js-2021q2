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

// const deleteUser = async (id) => {
//   const deletingUser = await getUser(id);
//   const deletingingUserIndex = users.findIndex(user => user.id === id);
//   users.splice(deletingingUserIndex, 1);
//   return deletingUser;
// }

module.exports = { getAllBoards, addBoard, getBoard, updateBoard };
