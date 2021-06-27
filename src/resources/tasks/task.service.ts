import { DeleteResult } from 'typeorm';
import { tasksRepo } from './task.memory.repository';
import { Task } from './task.model';
import { ITask } from '../../interfaces/interfaces';
import { TaskEntity } from '../../entities/task.entity';

const getAllTasks = () : Promise<Array<TaskEntity>>=> tasksRepo.getAllTasks();

const getTask = (id : string | undefined) : Promise<TaskEntity | undefined> => tasksRepo.getTask(id);

const addTask = (taskData : object, boardId : string | undefined) : TaskEntity => {
  const task : ITask = new Task(taskData, boardId);
  tasksRepo.addTask(task);

  return task;
};

const updateTask = (taskId : string | undefined, boardId : string | undefined, taskData : object) : Promise<TaskEntity | undefined> => {
  const task = new Task(taskData, boardId);
  return tasksRepo.updateTask(taskId, task);
};

const deleteTask = (id : string) : Promise<DeleteResult> => tasksRepo.deleteTask(id);

const deleteBoardTasks = (boardId : string) : Promise<DeleteResult> => tasksRepo.deleteBoardTasks(boardId);

const deleteUserTasks = (userId : string) : Promise<DeleteResult> => tasksRepo.deleteUserTasks(userId);

export const taskService = { 
  getAllTasks, 
  addTask, 
  getTask, 
  updateTask, 
  deleteTask, 
  deleteBoardTasks, 
  deleteUserTasks 
};
