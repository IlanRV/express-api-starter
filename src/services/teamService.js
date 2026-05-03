const { badRequest, notFound } = require("../errors/AppError");
const auditService = require("./auditService");
const teamRepository = require("../repositories/teamRepository");
const userRepository = require("../repositories/userRepository");
const { validateTeamMember } = require("../validators/teamValidator");

function listTeams() {
  return teamRepository.findMany();
}

function getTeam(teamId) {
  const team = teamRepository.findById(teamId);

  if (!team) {
    throw notFound(`Team ${teamId} was not found`);
  }

  return team;
}

function addTeamMember(teamId, payload, context) {
  getTeam(teamId);
  const input = validateTeamMember(payload);
  const user = userRepository.findById(input.userId);

  if (!user) {
    throw badRequest("userId must reference an existing user");
  }

  const team = teamRepository.addMember(teamId, input.userId);

  auditService.recordEvent({
    action: "team.member_added",
    actor: context.actor,
    entityType: "team",
    entityId: team.id,
    metadata: { userId: input.userId, requestId: context.requestId },
  });

  return team;
}

module.exports = {
  listTeams,
  getTeam,
  addTeamMember,
};
