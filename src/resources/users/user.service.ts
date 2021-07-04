import { DeleteResult } from "typeorm";
import { IUser } from "../../interfaces/interfaces";
import { UserEntity } from "../../entities/user.entity";
import { usersRepo } from './user.memory.repository';
import { User } from './user.model';

const getAllUsers = () : Promise<Array<UserEntity>> => usersRepo.getAllUsers();

const getUser = (id : string | undefined) : Promise<UserEntity | undefined> => usersRepo.getUser(id);

const addUser = (userData : object) : UserEntity => {
  const user : IUser = new User(userData);
  usersRepo.addUser(user);

  return user;
};

const updateUser = (id : string | undefined, userData : IUser) : Promise<UserEntity | undefined> => {
  const user : IUser = new User(userData);
  return usersRepo.updateUser(id, user);
};

const deleteUser = (id : string) : Promise<DeleteResult> => usersRepo.deleteUser(id);

export const usersService = { 
  getAllUsers, 
  getUser, 
  addUser, 
  updateUser, 
  deleteUser
};
