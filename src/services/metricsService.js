const projectRepository = require("../repositories/projectRepository");
const teamRepository = require("../repositories/teamRepository");
const userRepository = require("../repositories/userRepository");
const { countBy } = require("../utils/collections");

function buildSummary() {
  const users = userRepository.findMany();
  const projects = projectRepository.findMany();
  const teams = teamRepository.findMany();

  return {
    totals: {
      users: users.length,
      projects: projects.length,
      teams: teams.length,
    },
    usersByRole: countBy(users, "role"),
    projectsByStatus: countBy(projects, "status"),
    teamsBySize: teams.map((team) => ({
      teamId: team.id,
      name: team.name,
      members: team.memberIds.length,
    })),
  };
}

module.exports = { buildSummary };
