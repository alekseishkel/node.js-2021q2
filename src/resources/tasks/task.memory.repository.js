const tasks = [];

const getAllTasks = async () => tasks;

const getTask = async (id) => tasks.find(task => task.id === id);

const addTask = async (task) => {
  tasks.push(task);
};

// const updateBoard = async (id, {title, columns}) => {
//   let updatedBoard;
//   const updatingBoard = await getBoard(id);

//   if (updatingBoard) {
//     const updatingBoardIndex = boards.findIndex(board => board.id === id);
//     updatedBoard = {...updatingBoard, title, columns};
//     boards[updatingBoardIndex] = updatedBoard; 
//   } else {
//     updatedBoard = undefined;
//   }

//   return updatedBoard;
// };

// const deleteBoard = async (id) => {
//   const deletingBoard = await getBoard(id);
  
//   if (deletingBoard) {
//     const deletingingBoardIndex = boards.findIndex(board => board.id === id);
//     boards.splice(deletingingBoardIndex, 1);
//   }
  
//   return deletingBoard;
// };

module.exports = { getAllTasks, addTask, getTask };
