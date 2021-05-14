const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const getAllUsers = () => usersRepo.getAllUsers();

const getUser = (id) => usersRepo.getUser(id);

const addUser = (userData) => {
  const user = new User(userData);
  usersRepo.addUser(user);

  return user;
};

const updateUser = (id, userData) => {
  const user = new User(userData);
  return usersRepo.updateUser(id, user);
};

module.exports = { getAllUsers, getUser, addUser, updateUser };
