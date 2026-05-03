const { users } = require("../data/seedData");

const records = [...users];

function findMany(filters = {}) {
  return records.filter((user) => {
    if (filters.role && user.role !== filters.role) {
      return false;
    }

    return true;
  });
}

function findByEmail(email) {
  return records.find((user) => user.email.toLowerCase() === email.toLowerCase()) || null;
}

function findById(userId) {
  return records.find((user) => user.id === userId) || null;
}

function insert(user) {
  records.push(user);
  return user;
}

function update(userId, changes) {
  const index = records.findIndex((user) => user.id === userId);

  if (index === -1) {
    return null;
  }

  records[index] = { ...records[index], ...changes, updatedAt: new Date().toISOString() };
  return records[index];
}

module.exports = {
  findMany,
  findByEmail,
  findById,
  insert,
  update,
};
