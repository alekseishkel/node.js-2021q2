import { ITask } from '../../interfaces/interfaces';

let tasks : Array<ITask> = [];

/**
 * Gets all the tasks from the "database"
 * @returns {Promise<Array<Task>>} Promise object represents the array of tasks
 */
const getAllTasks = async () : Promise<Array<ITask>> => tasks;

/**
 * Gets the task by id from the "database"
 * @param {string} id - id of the requested task 
 * @returns {Promise<Task>} Promise object represents the task
 */
const getTask = async (id : string | undefined) : Promise<ITask | undefined> => 
  tasks.find((task : ITask) => task.id === id);

/**
 * Add a new task to the "database"
 * @param {object} task - Task
 * @returns {Promise<tasks.length>} - new length of tasks array
 */
const addTask = async (task : ITask) : Promise<number> => tasks.push(task);

/**
 * Updates a task depending on the received data
 * @param {string} id - id of updating task
 * @param {Task} Task - the new task
 * @returns {Promise<Task>} Promise object represents the updated task
 */
const updateTask = 
  async (id : string | undefined, {title, order, description, userId, boardId, columnId} : ITask)
    : Promise<ITask | undefined> => {
      let updatedTask : ITask | undefined;
      const updatingTask : ITask | undefined = await getTask(id);

      if (updatingTask) {
        const updatingTaskIndex : number = tasks.findIndex((task : ITask) => task.id === id);
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
const deleteTask = async (id : string | undefined) : Promise<ITask | undefined> => {
  const deletingTask : ITask | undefined = await getTask(id);
  
  if (deletingTask) {
    const deletingingTaskIndex : number = tasks.findIndex((task : ITask) => task.id === id);
    tasks.splice(deletingingTaskIndex, 1);
  }
  
  return deletingTask;
};

/**
 * Deletes tasks of the board that has been deleted
 * @param {string} boardId - id of the connected board
 * @returns {Promise<void>}
 */
const deleteBoardTasks = async (boardId : string | undefined) : Promise<void> => {
  tasks = tasks.filter((task : ITask) => task.boardId !== boardId);
};

/**
 * Deletes tasks of the user that has been deleted
 * @param {string} userId - id of the connected user
 * @returns {Promise<void>}
 */
const deleteUserTasks = async (userId : string | undefined) : Promise<void> => {
  tasks = tasks.map((task : ITask) => task.userId === userId ? {...task, userId: null} : task);
};

export const tasksRepo = { 
  getAllTasks, 
  addTask, 
  getTask, 
  updateTask, 
  deleteTask, 
  deleteBoardTasks, 
  deleteUserTasks
};
