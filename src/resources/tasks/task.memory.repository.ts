import { DeleteResult, getRepository } from 'typeorm';
import { ITask } from '../../interfaces/interfaces';
import { TaskEntity } from '../../entities/task.entity';
import { BoardEntity } from '../../entities/board.entity';
import { UserEntity } from '../../entities/user.entity';

const getAllTasks = async (): Promise<Array<TaskEntity>> =>
  getRepository(TaskEntity).find();

const getTask = async (
  id: string | undefined
): Promise<TaskEntity | undefined> => getRepository(TaskEntity).findOne(id);

const addTask = async (task: ITask): Promise<TaskEntity> =>
  getRepository(TaskEntity).save(task);

const updateTask = async (
  id: string | undefined,
  { title, order, description, userId, boardId, columnId }: ITask
): Promise<TaskEntity | undefined> => {
  const taskRepository = await getRepository(TaskEntity);
  const updatingTask: TaskEntity | undefined = await taskRepository.findOne(id);

  return taskRepository.save({
    ...updatingTask,
    title,
      order,
      description,
      userId,
      boardId,
      columnId,
  });
};

const deleteTask = async (
  id: string
): Promise<DeleteResult> => getRepository(TaskEntity).delete(id);

const deleteBoardTasks = async (boardId: string): Promise<DeleteResult> => getRepository(BoardEntity).delete(boardId);

const deleteUserTasks = async (userId: string): Promise<DeleteResult> => getRepository(UserEntity).delete(userId);

export const tasksRepo = {
  getAllTasks,
  addTask,
  getTask,
  updateTask,
  deleteTask,
  deleteBoardTasks,
  deleteUserTasks,
};
