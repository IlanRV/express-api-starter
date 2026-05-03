const metricsService = require("../services/metricsService");
const { ok } = require("../utils/responses");

function getSummary(_req, res) {
  const summary = metricsService.buildSummary();

  res.json(ok(summary));
}

module.exports = { getSummary };
