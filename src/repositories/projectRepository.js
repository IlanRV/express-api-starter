const { projects } = require("../data/seedData");

const records = [...projects];

function findMany(filters = {}) {
  return records.filter((project) => {
    if (filters.ownerId && project.ownerId !== filters.ownerId) {
      return false;
    }

    if (filters.status && project.status !== filters.status) {
      return false;
    }

    if (filters.teamId && project.teamId !== filters.teamId) {
      return false;
    }

    return true;
  });
}

function findById(projectId) {
  return records.find((project) => project.id === projectId) || null;
}

function insert(project) {
  records.push(project);
  return project;
}

function update(projectId, changes) {
  const index = records.findIndex((project) => project.id === projectId);

  if (index === -1) {
    return null;
  }

  records[index] = { ...records[index], ...changes, updatedAt: new Date().toISOString() };
  return records[index];
}

module.exports = {
  findMany,
  findById,
  insert,
  update,
};
