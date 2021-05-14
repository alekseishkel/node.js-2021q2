const users = [];

const getAll = async () => users;

const addUser = (user) => {
  users.push(user);
}

module.exports = { getAll, addUser };
