const userService = require("../services/userService");
const { created, ok } = require("../utils/responses");

function listUsers(req, res) {
  const users = userService.listUsers({ role: req.query.role });

  res.json(ok(users, { count: users.length }));
}

function getUser(req, res) {
  const user = userService.getUser(req.params.userId);

  res.json(ok(user));
}

function createUser(req, res) {
  const user = userService.createUser(req.body, req.context);

  res.status(201).json(created(user));
}

function updateUser(req, res) {
  const user = userService.updateUser(req.params.userId, req.body, req.context);

  res.json(ok(user));
}

module.exports = {
  listUsers,
  getUser,
  createUser,
  updateUser,
};
