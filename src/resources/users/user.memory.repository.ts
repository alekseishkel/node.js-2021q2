import { DeleteResult, getRepository } from 'typeorm';
import { IUser } from '../../interfaces/interfaces';
import { UserEntity } from '../../entities/user.entity';

const getAllUsers = async () : Promise<Array<UserEntity>> => getRepository(UserEntity).find();

const getUser = async (id : string | undefined) : Promise<UserEntity | undefined> => getRepository(UserEntity).findOne(id);

const addUser = async (user : IUser) : Promise<UserEntity> => getRepository(UserEntity).save(user);

const updateUser = async (id : string | undefined, {name, login, password} : IUser) : Promise<UserEntity | undefined> => {
  const userRepository = await getRepository(UserEntity);
  const updatingUser: UserEntity | undefined = await userRepository.findOne(id);

  return userRepository.save({
    ...updatingUser,
    name, 
    login, 
    password
  });
};

const deleteUser = async (id : string) : Promise<DeleteResult> => getRepository(UserEntity).delete(id);

export const usersRepo = { 
  getAllUsers, 
  getUser, 
  addUser, 
  updateUser, 
  deleteUser
};
