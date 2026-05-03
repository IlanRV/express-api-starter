const { getEnv } = require("../config/env");
const { ok } = require("../utils/responses");

function getHealth(_req, res) {
  const env = getEnv();

  res.json(
    ok({
      service: env.serviceName,
      status: "ok",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    })
  );
}

module.exports = { getHealth };
