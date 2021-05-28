const users = [];

/**
 * Gets all the users from the "database"
 * @returns {Promise<Array<User>>} Promise object represents the array of users
 */
const getAllUsers = async () => users;

/**
 * Gets the user by id from the "database"
 * @param {string} id - id of the requested user 
 * @returns {Promise<User>} Promise object represents the user
 */
const getUser = async (id) => users.find(user => user.id === id);

/**
 * Add a new user to the "database"
 * @param {object} user - User
 * @returns {Promise<users.length>} - new length of users array
 */
const addUser = async (user) => {
  users.push(user);
};

/**
 * Updates a user depending on the received data
 * @param {string} id - id of updating user
 * @param {User} User - the new user
 * @returns {Promise<User>} Promise object represents the updated user
 */
const updateUser = async (id, {name, login, password}) => {
  let updatedUser;
  const updatingUser = await getUser(id);

  if (updatingUser) {
    const updatingUserIndex = users.findIndex(user => user.id === id);
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
const deleteUser = async (id) => {
  const deletingUser = await getUser(id);

  if (deletingUser) {
    const deletingingUserIndex = users.findIndex(user => user.id === id);
    users.splice(deletingingUserIndex, 1);
  }
  
  return deletingUser;
};

module.exports = { getAllUsers, getUser, addUser, updateUser, deleteUser };
