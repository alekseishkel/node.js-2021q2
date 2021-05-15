const tasks = [];

const getAllTasks = async () => tasks;

const getTask = async (id) => tasks.find(task => task.id === id);

const addTask = async (task) => {
  tasks.push(task);
};

const updateTask = async (id, {title, order, description, userId, boardId, columnId}) => {
  let updatedTask;
  const updatingTask = await getTask(id);

  if (updatingTask) {
    const updatingTaskIndex = tasks.findIndex(board => board.id === id);
    updatedTask = {...updatingTask, title, order, description, userId, boardId, columnId};
    tasks[updatingTaskIndex] = updatedTask; 
  } else {
    updatedTask = undefined;
  }

  return updatedTask;
};

// const deleteBoard = async (id) => {
//   const deletingBoard = await getBoard(id);
  
//   if (deletingBoard) {
//     const deletingingBoardIndex = boards.findIndex(board => board.id === id);
//     boards.splice(deletingingBoardIndex, 1);
//   }
  
//   return deletingBoard;
// };

module.exports = { getAllTasks, addTask, getTask, updateTask };
