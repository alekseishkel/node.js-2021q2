const tasksRepo = require('./task.memory.repository');
const Task = require('./task.model');

const getAllTasks = () => tasksRepo.getAllTasks();

const getTask = (id) => tasksRepo.getTask(id);

const addTask = (taskData) => {
  const task = new Task(taskData);
  tasksRepo.addTask(task);

  return task;
};

// const updateBoard = (id, boardData) => {
//   const board = new Board(boardData);
//   return boardsRepo.updateBoard(id, board);
// };

// const deleteBoard = (id) => boardsRepo.deleteBoard(id);

module.exports = { getAllTasks, addTask, getTask };
