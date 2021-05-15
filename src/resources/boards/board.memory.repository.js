const boards = [];

const getAllBoards = async () => boards;

const getBoard = async (id) => boards.find(board => board.id === id);

const addBoard = async (board) => {
  boards.push(board);
};

// const updateUser = async (id, {name, login, password}) => {
//   const updatingUser = await getUser(id);
//   const updatingUserIndex = users.findIndex(user => user.id === id);
//   const updatedUser = {...updatingUser, name, login, password};
//   users[updatingUserIndex] = updatedUser; 

//   return updateUser
// };

// const deleteUser = async (id) => {
//   const deletingUser = await getUser(id);
//   const deletingingUserIndex = users.findIndex(user => user.id === id);
//   users.splice(deletingingUserIndex, 1);
//   return deletingUser;
// }

module.exports = { getAllBoards, addBoard, getBoard };
