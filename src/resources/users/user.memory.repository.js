const users = [];

const getAllUsers = async () => users;

const getUser = async (id) => users.find(user => user.id === id);

const addUser = async (user) => {
  users.push(user);
};

const updateUser = async (id, {name, login, password}) => {
  const updatingUser = await getUser(id);
  const updatingUserIndex = users.findIndex(user => user.id === id);
  const updatedUser = {...updatingUser, name, login, password};
  users[updatingUserIndex] = updatedUser; 

  return updateUser
}

module.exports = { getAllUsers, getUser, addUser, updateUser };
