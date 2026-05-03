const { badRequest } = require("../errors/AppError");

const projectStatuses = new Set(["active", "paused", "archived"]);

function validateProject(payload) {
  if (!payload || typeof payload !== "object") {
    throw badRequest("Project payload is required");
  }

  const errors = [];

  if (typeof payload.name !== "string" || payload.name.trim().length < 3) {
    errors.push("name must be at least 3 characters");
  }

  if (typeof payload.ownerId !== "string" || payload.ownerId.trim().length === 0) {
    errors.push("ownerId is required");
  }

  if (payload.teamId !== undefined && typeof payload.teamId !== "string") {
    errors.push("teamId must be a string when provided");
  }

  if (payload.status && !projectStatuses.has(payload.status)) {
    errors.push("status must be active, paused, or archived");
  }

  if (payload.tags && !Array.isArray(payload.tags)) {
    errors.push("tags must be an array");
  }

  if (errors.length > 0) {
    throw badRequest("Invalid project payload", errors);
  }

  return {
    name: payload.name.trim(),
    ownerId: payload.ownerId.trim(),
    teamId: payload.teamId?.trim(),
    status: payload.status,
    tags: payload.tags,
  };
}

function validateProjectStatus(payload) {
  if (!payload || typeof payload !== "object" || !projectStatuses.has(payload.status)) {
    throw badRequest("status must be active, paused, or archived");
  }

  return { status: payload.status };
}

module.exports = {
  validateProject,
  validateProjectStatus,
};
