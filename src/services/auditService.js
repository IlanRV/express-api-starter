const auditRepository = require("../repositories/auditRepository");
const { createId } = require("../utils/idFactory");

function listEvents({ limit }) {
  const safeLimit = Number.isFinite(limit) && limit > 0 ? Math.min(limit, 100) : 25;

  return auditRepository.findMany({ limit: safeLimit });
}

function recordEvent({ action, actor, entityType, entityId, metadata }) {
  return auditRepository.insert({
    id: createId("evt"),
    action,
    actor,
    entityType,
    entityId,
    metadata,
    timestamp: new Date().toISOString(),
  });
}

module.exports = {
  listEvents,
  recordEvent,
};
