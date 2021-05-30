import { IUser } from '../../interfaces/interfaces';

const users : Array<IUser> = [];

/**
 * Gets all the users from the "database"
 * @returns {Promise<Array<User>>} Promise object represents the array of users
 */
const getAllUsers = async () : Promise<Array<IUser>> => users;

/**
 * Gets the user by id from the "database"
 * @param {string} id - id of the requested user 
 * @returns {Promise<User>} Promise object represents the user
 */
const getUser = async (id : string | undefined) : Promise<IUser | undefined> => 
  users.find((user : IUser) => user.id === id);

/**
 * Add a new user to the "database"
 * @param {object} user - User
 * @returns {Promise<users.length>} - new length of users array
 */
const addUser = async (user : IUser) : Promise<number> => users.push(user);

/**
 * Updates a user depending on the received data
 * @param {string} id - id of updating user
 * @param {User} User - the new user
 * @returns {Promise<User>} Promise object represents the updated user
 */
const updateUser = async (id : string | undefined, {name, login, password} : IUser) : Promise<IUser | undefined> => {
  let updatedUser : IUser | undefined;
  const updatingUser : IUser | undefined = await getUser(id);

  if (updatingUser) {
    const updatingUserIndex : number = users.findIndex((user : IUser) => user.id === id);
    updatedUser = {...updatingUser, name, login, password};
    users[updatingUserIndex] = updatedUser; 
  } else {
    updatedUser = undefined;
  }

  return updatedUser;
};

/**
 * Deletes the user from the "database"
 * @param {string} id - id of deleting user
 * @returns {Promise<User>} Promise object represents the deleted user
 */
const deleteUser = async (id : string | undefined) : Promise<IUser | undefined> => {
  const deletingUser : IUser | undefined = await getUser(id);

  if (deletingUser) {
    const deletingingUserIndex : number = users.findIndex((user : IUser) => user.id === id);
    users.splice(deletingingUserIndex, 1);
  }
  
  return deletingUser;
};

export const usersRepo = { 
  getAllUsers, 
  getUser, 
  addUser, 
  updateUser, 
  deleteUser
};
