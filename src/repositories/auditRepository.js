const { auditEvents } = require("../data/seedData");

const events = [...auditEvents];

function findMany({ limit }) {
  return [...events]
    .sort((left, right) => right.timestamp.localeCompare(left.timestamp))
    .slice(0, limit);
}

function insert(event) {
  events.push(event);
  return event;
}

module.exports = {
  findMany,
  insert,
};
