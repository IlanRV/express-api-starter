const { teams } = require("../data/seedData");

const records = [...teams];

function findMany() {
  return records;
}

function findById(teamId) {
  return records.find((team) => team.id === teamId) || null;
}

function addMember(teamId, userId) {
  const team = findById(teamId);

  if (!team) {
    return null;
  }

  if (!team.memberIds.includes(userId)) {
    team.memberIds.push(userId);
    team.updatedAt = new Date().toISOString();
  }

  return team;
}

module.exports = {
  findMany,
  findById,
  addMember,
};
