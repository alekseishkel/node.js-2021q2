const tasksRepo = require('./task.memory.repository');
const Task = require('./task.model');

/**
 * Gets all the tasks from the tasks repository
 * @returns {Promise<Array<Task>>} Promise object represents the array of tasks
 */
const getAllTasks = () => tasksRepo.getAllTasks();

/**
 * Passes the task id to the tasks repository 
 * and gets the task by this id
 * @param {string} id of the requested task
 * @returns {Promise<Task>} Promise object represents the task
 */
const getTask = (id) => tasksRepo.getTask(id);

/**
 * Сreates a new task depending on the received data
 * and the id of the connected board and passes 
 * the task to the repository
 * @param {object} taskData - the data for the new task
 * @param {string} boardId - id of the connected board
 * @returns {Task} Created task
 */
const addTask = (taskData, boardId) => {
  const task = new Task(taskData, boardId);
  tasksRepo.addTask(task);

  return task;
};

/**
 * Сreates a new task depending on the received data
 * and the id of the connected board and passes this 
 * task and the id of the task that needs to be updated 
 * in the repository 
 * @param {string} taskId - id of updating task
 * @param {string} boardId - id of the connected board
 * @param {object} taskData - the data for the new task
 * @returns {Promise<Task>} Promise object represents the updated task
 */
const updateTask = (taskId, boardId, taskData) => {
  const task = new Task(taskData, boardId);
  return tasksRepo.updateTask(taskId, task);
};

/**
 * Passes the id of the task that needs to be deleted 
 * to the task repository
 * @param {string} id of deleting task
 * @returns {Promise<Task>} Promise object represents the deleted task
 */
const deleteTask = (id) => tasksRepo.deleteTask(id);

/**
 * Passes the id of the board whose tasks needs to be deleted
 * when this board deleted to the task repository
 * @param {string} boardId - id of the connected board
 * @returns {Promise<void>}
 */
const deleteBoardTasks = (boardId) => tasksRepo.deleteBoardTasks(boardId);

/**
 * Passes the id of the user whose tasks needs to be deleted
 * when this user deleted to the task repository
 * @param {string} userId - id of the connected user
 * @returns {Promise<void>}
 */
const deleteUserTasks = (userId) => tasksRepo.deleteUserTasks(userId);

module.exports = { getAllTasks, addTask, getTask, updateTask, deleteTask, deleteBoardTasks, deleteUserTasks };
