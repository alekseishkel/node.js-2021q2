const users = [];

const getAllUsers = async () => users;

const getUser = async (id) => users.find(user => user.id === id);

const addUser = async (user) => {
  users.push(user);
};

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

const deleteUser = async (id) => {
  const deletingUser = await getUser(id);

  if (deletingUser) {
    const deletingingUserIndex = users.findIndex(user => user.id === id);
    users.splice(deletingingUserIndex, 1);
  }
  
  return deletingUser;
};

module.exports = { getAllUsers, getUser, addUser, updateUser, deleteUser };
