function requestLogger(req, res, next) {
  res.on("finish", () => {
    const durationMs = Date.now() - req.context.startedAt;
    console.log(
      `[${req.context.requestId}] ${req.method} ${req.originalUrl} ${res.statusCode} ${durationMs}ms`
    );
  });

  next();
}

module.exports = requestLogger;
