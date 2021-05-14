const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const getAll = () => usersRepo.getAll();

const addUser = (userData) => {
  const user = new User(userData);
  usersRepo.addUser(user);

  return user;
};

module.exports = { getAll, addUser };
