const tasksRepo = require('./task.memory.repository');
const Task = require('./task.model');

const getAllTasks = () => tasksRepo.getAllTasks();

const getTask = (id) => tasksRepo.getTask(id);

const addTask = (taskData, boardId) => {
  const task = new Task(taskData, boardId);
  tasksRepo.addTask(task);

  return task;
};

const updateTask = (taskId, boardId, taskData) => {
  const task = new Task(taskData, boardId);
  return tasksRepo.updateTask(taskId, task);
};

const deleteTask = (id) => tasksRepo.deleteTask(id);

const deleteBoardTasks = (boardId) => tasksRepo.deleteBoardTasks(boardId);

const deleteUserTasks = (userId) => tasksRepo.deleteUserTasks(userId);

module.exports = { getAllTasks, addTask, getTask, updateTask, deleteTask, deleteBoardTasks, deleteUserTasks };
