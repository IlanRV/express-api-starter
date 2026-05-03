const auditService = require("../services/auditService");
const { ok } = require("../utils/responses");

function listAuditEvents(req, res) {
  const limit = Number(req.query.limit || 25);
  const events = auditService.listEvents({ limit });

  res.json(ok(events, { count: events.length }));
}

module.exports = { listAuditEvents };
