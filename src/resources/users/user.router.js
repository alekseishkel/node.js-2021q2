const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAllUsers();
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getUser(req.params.id) || "User no found";

  if (typeof user === "object") {
    res.json(User.toResponse(user));
  } else {
    res.json(user);
  }
});

router.route('/').post(async (req, res) => {
  const user = await usersService.addUser(req.body);
  res.status(201).json(User.toResponse(user));
});

router.route('/:id').put(async (req, res) => {
  const user = await usersService.updateUser(req.params.id, req.body) || "User no found";

  if (typeof user === "object") {
    res.json(User.toResponse(user));
  } else {
    res.json(user);
  }
});

router.route('/:id').delete(async (req, res) => {
  const user = await usersService.deleteUser(req.params.id) || "User no found";
  if (typeof user === "object") {
    res.json(User.toResponse(user));
  } else {
    res.json(user);
  }
});

module.exports = router;
