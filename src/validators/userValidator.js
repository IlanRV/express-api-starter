const { badRequest } = require("../errors/AppError");

const roles = new Set(["admin", "developer", "viewer"]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateUser(payload) {
  if (!payload || typeof payload !== "object") {
    throw badRequest("User payload is required");
  }

  const errors = [];

  if (typeof payload.name !== "string" || payload.name.trim().length < 2) {
    errors.push("name must be at least 2 characters");
  }

  if (typeof payload.email !== "string" || !emailPattern.test(payload.email)) {
    errors.push("email must be valid");
  }

  if (payload.role && !roles.has(payload.role)) {
    errors.push("role must be admin, developer, or viewer");
  }

  if (errors.length > 0) {
    throw badRequest("Invalid user payload", errors);
  }

  return {
    name: payload.name.trim(),
    email: payload.email.trim().toLowerCase(),
    role: payload.role,
  };
}

function validateUserPatch(payload) {
  if (!payload || typeof payload !== "object") {
    throw badRequest("User update payload is required");
  }

  const changes = {};

  if (payload.name !== undefined) {
    if (typeof payload.name !== "string" || payload.name.trim().length < 2) {
      throw badRequest("name must be at least 2 characters");
    }

    changes.name = payload.name.trim();
  }

  if (payload.role !== undefined) {
    if (!roles.has(payload.role)) {
      throw badRequest("role must be admin, developer, or viewer");
    }

    changes.role = payload.role;
  }

  if (Object.keys(changes).length === 0) {
    throw badRequest("At least one supported field is required");
  }

  return changes;
}

module.exports = {
  validateUser,
  validateUserPatch,
};
