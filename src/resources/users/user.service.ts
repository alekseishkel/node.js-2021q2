import { IUser } from "../../interfaces/interfaces";
import { usersRepo } from './user.memory.repository';
import { User } from './user.model';

/**
 * Gets all the users from the users repository
 * @returns {Promise<Array<User>>} Promise object represents the array of users
 */
const getAllUsers = () : Promise<Array<IUser>> => usersRepo.getAllUsers();

/**
 * Passes the user id to the users repository 
 * and gets the user by this id
 * @param {string} id - id of the requested user 
 * @returns {Promise<User>} Promise object represents the user
 */
const getUser = (id : string | undefined) : Promise<IUser | undefined> => usersRepo.getUser(id);

/**
 * Сreates a new user depending on the received data
 * and passes the user to the repository
 * @param {object} userData - the data for the new user
 * @returns {User} Created user
 */
const addUser = (userData : object) : IUser => {
  const user : IUser = new User(userData);
  usersRepo.addUser(user);

  return user;
};

/**
 * Сreates a new user depending on the received data
 * and passes this user and the id of the user
 * that needs to be updated to the repository 
 * @param {string} id - id of updating user
 * @param {object} userData - the data for the new user
 * @returns {Promise<User>} Promise object represents the updated user
 */
const updateUser = (id : string | undefined, userData : IUser) : Promise<IUser | undefined> => {
  const user : IUser = new User(userData);
  return usersRepo.updateUser(id, user);
};

/**
 * Passes the id of the user that needs to be deleted 
 * to the repository
 * @param {string} id - id of deleting user
 * @returns {Promise<User>} Promise object represents the deleted user
 */
const deleteUser = (id : string | undefined) : Promise<IUser | undefined> => usersRepo.deleteUser(id);

export const usersService = { 
  getAllUsers, 
  getUser, 
  addUser, 
  updateUser, 
  deleteUser
};
