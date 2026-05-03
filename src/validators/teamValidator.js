const { badRequest } = require("../errors/AppError");

function validateTeamMember(payload) {
  if (!payload || typeof payload !== "object") {
    throw badRequest("Team member payload is required");
  }

  if (typeof payload.userId !== "string" || payload.userId.trim().length === 0) {
    throw badRequest("userId is required");
  }

  return { userId: payload.userId.trim() };
}

module.exports = { validateTeamMember };
