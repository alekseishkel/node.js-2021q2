const usersRepo = require('./board.memory.repository');
const User = require('./board.model');

const getAllBoards = () => usersRepo.getAllBoards();

// const getUser = (id) => usersRepo.getUser(id);

// const addUser = (userData) => {
//   const user = new User(userData);
//   usersRepo.addUser(user);

//   return user;
// };

// const updateUser = (id, userData) => {
//   const user = new User(userData);
//   return usersRepo.updateUser(id, user);
// };

// const deleteUser = (id) => usersRepo.deleteUser(id);

module.exports = { getAllBoards };
