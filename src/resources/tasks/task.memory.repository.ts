let tasks = [];

/**
 * Gets all the tasks from the "database"
 * @returns {Promise<Array<Task>>} Promise object represents the array of tasks
 */
const getAllTasks = async () => tasks;

/**
 * Gets the task by id from the "database"
 * @param {string} id - id of the requested task 
 * @returns {Promise<Task>} Promise object represents the task
 */
const getTask = async (id) => tasks.find(task => task.id === id);

/**
 * Add a new task to the "database"
 * @param {object} task - Task
 * @returns {Promise<tasks.length>} - new length of tasks array
 */
const addTask = async (task) => {
  tasks.push(task);
};

/**
 * Updates a task depending on the received data
 * @param {string} id - id of updating task
 * @param {Task} Task - the new task
 * @returns {Promise<Task>} Promise object represents the updated task
 */
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

/**
 * Deletes the task from the "database"
 * @param {string} id - id of deleting task
 * @returns {Promise<Task>} Promise object represents the deleted task
 */
const deleteTask = async (id) => {
  const deletingTask = await getTask(id);
  
  if (deletingTask) {
    const deletingingTaskIndex = tasks.findIndex(task => task.id === id);
    tasks.splice(deletingingTaskIndex, 1);
  }
  
  return deletingTask;
};

/**
 * Deletes tasks of the board that has been deleted
 * @param {string} boardId - id of the connected board
 * @returns {Promise<void>}
 */
const deleteBoardTasks = async (boardId) => {
  tasks = tasks.filter(task => task.boardId !== boardId);
};

/**
 * Deletes tasks of the user that has been deleted
 * @param {string} userId - id of the connected user
 * @returns {Promise<void>}
 */
const deleteUserTasks = async (userId) => {
  tasks = tasks.map(task => task.userId === userId ? {...task, userId: null} : task);
};

module.exports = { getAllTasks, addTask, getTask, updateTask, deleteTask, deleteBoardTasks, deleteUserTasks };
