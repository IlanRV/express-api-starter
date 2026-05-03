const { badRequest, notFound } = require("../errors/AppError");
const userRepository = require("../repositories/userRepository");
const auditService = require("./auditService");
const { createId } = require("../utils/idFactory");
const { validateUser, validateUserPatch } = require("../validators/userValidator");

function listUsers(filters) {
  return userRepository.findMany(filters);
}

function getUser(userId) {
  const user = userRepository.findById(userId);

  if (!user) {
    throw notFound(`User ${userId} was not found`);
  }

  return user;
}

function createUser(payload, context) {
  const input = validateUser(payload);

  if (userRepository.findByEmail(input.email)) {
    throw badRequest("A user with that email already exists");
  }

  const user = userRepository.insert({
    id: createId("usr"),
    name: input.name,
    email: input.email,
    role: input.role || "viewer",
    createdAt: new Date().toISOString(),
  });

  auditService.recordEvent({
    action: "user.created",
    actor: context.actor,
    entityType: "user",
    entityId: user.id,
    metadata: { requestId: context.requestId },
  });

  return user;
}

function updateUser(userId, payload, context) {
  getUser(userId);
  const input = validateUserPatch(payload);
  const user = userRepository.update(userId, input);

  auditService.recordEvent({
    action: "user.updated",
    actor: context.actor,
    entityType: "user",
    entityId: user.id,
    metadata: { changedFields: Object.keys(input), requestId: context.requestId },
  });

  return user;
}

module.exports = {
  listUsers,
  getUser,
  createUser,
  updateUser,
};
