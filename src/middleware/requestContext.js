const { createId } = require("../utils/idFactory");

function requestContext(req, _res, next) {
  req.context = {
    requestId: req.get("x-request-id") || createId("req"),
    actor: req.get("x-demo-actor") || "anonymous",
    startedAt: Date.now(),
  };

  next();
}

module.exports = requestContext;
