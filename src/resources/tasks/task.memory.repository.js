let tasks = [];

const getAllTasks = async () => tasks;

const getTask = async (id) => tasks.find(task => task.id === id);

const addTask = async (task) => {
  tasks.push(task);
};

const updateTask = async (id, {title, order, description, userId, boardId, columnId}) => {
  let updatedTask;
  const updatingTask = await getTask(id);

  if (updatingTask) {
    const updatingTaskIndex = tasks.findIndex(task => task.id === id);
    updatedTask = {...updatingTask, title, order, description, userId, boardId, columnId};
    tasks[updatingTaskIndex] = updatedTask; 
  } else {
    updatedTask = undefined;
  }

  return updatedTask;
};

const deleteTask = async (id) => {
  const deletingTask = await getTask(id);
  
  if (deletingTask) {
    const deletingingTaskIndex = tasks.findIndex(task => task.id === id);
    tasks.splice(deletingingTaskIndex, 1);
  }
  
  return deletingTask;
};

const deleteBoardTasks = async (boardId) => {
  tasks = tasks.filter(task => task.boardId !== boardId);
};

const deleteUserTasks = async (userId) => {
  tasks = tasks.map(task => task.userId === userId ? {...task, userId: null} : task);
};

module.exports = { getAllTasks, addTask, getTask, updateTask, deleteTask, deleteBoardTasks, deleteUserTasks };
