const { badRequest } = require("../errors/AppError");

const requestBuckets = new Map();

function pruneExpiredBuckets(now) {
  for (const [key, bucket] of requestBuckets.entries()) {
    if (bucket.resetAt <= now) {
      requestBuckets.delete(key);
    }
  }
}

function rateLimit(options = {}) {
  const windowMs = options.windowMs || 60_000;
  const maxRequests = options.maxRequests || 120;

  return function rateLimitMiddleware(req, _res, next) {
    const now = Date.now();
    pruneExpiredBuckets(now);

    const key = req.ip || "local";
    const bucket = requestBuckets.get(key) || { count: 0, resetAt: now + windowMs };
    bucket.count += 1;
    requestBuckets.set(key, bucket);

    if (bucket.count > maxRequests) {
      next(badRequest("Too many requests. Try again shortly."));
      return;
    }

    next();
  };
}

module.exports = rateLimit;
