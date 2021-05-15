const tasksRepo = require('./task.memory.repository');
const Task = require('./task.model');

const getAllTasks = () => tasksRepo.getAllTasks();

const getTask = (id) => tasksRepo.getTask(id);

const addTask = (taskData) => {
  const task = new Task(taskData);
  tasksRepo.addTask(task);

  return task;
};

const updateTask = (id, taskData) => {
  const task = new Task(taskData);
  return tasksRepo.updateTask(id, task);
};

const deleteTask = (id) => tasksRepo.deleteTask(id);

module.exports = { getAllTasks, addTask, getTask, updateTask, deleteTask };
