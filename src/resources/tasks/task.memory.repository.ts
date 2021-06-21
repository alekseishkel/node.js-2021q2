import { DeleteResult, getRepository } from 'typeorm';
import { ITask } from '../../interfaces/interfaces';
import { TaskEntity } from '../../entities/task.entity';

let tasks : Array<ITask> = [];

const getAllTasks = async () : Promise<Array<ITask>> => tasks;

const getTask = async (id : string | undefined) : Promise<ITask | undefined> => 
  tasks.find((task : ITask) => task.id === id);

const addTask = async (task : ITask) : Promise<number> => tasks.push(task);

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

const deleteTask = async (id : string | undefined) : Promise<ITask | undefined> => {
  const deletingTask : ITask | undefined = await getTask(id);
  
  if (deletingTask) {
    const deletingingTaskIndex : number = tasks.findIndex((task : ITask) => task.id === id);
    tasks.splice(deletingingTaskIndex, 1);
  }
  
  return deletingTask;
};

const deleteBoardTasks = async (boardId : string | undefined) : Promise<void> => {
  tasks = tasks.filter((task : ITask) => task.boardId !== boardId);
};

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
