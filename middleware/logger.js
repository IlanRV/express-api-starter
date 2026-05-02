/**
 * Simple request-logging middleware.
 * Logs the HTTP method, URL, and an ISO-8601 timestamp for every request.
 */
function logger(req, _res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
}

module.exports = logger;
