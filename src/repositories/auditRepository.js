const { auditEvents } = require("../data/seedData");
const { sortByDateDesc } = require("../utils/collections");

const events = [...auditEvents];

function findMany({ limit }) {
  return sortByDateDesc(events, "timestamp").slice(0, limit);
}

function insert(event) {
  events.push(event);
  return event;
}

module.exports = {
  findMany,
  insert,
};
