const { AppError } = require("../errors/AppError");

function errorHandler(error, req, res, _next) {
  const isKnownError = error instanceof AppError;
  const statusCode = isKnownError ? error.statusCode : 500;

  if (!isKnownError) {
    console.error(`[${req.context.requestId}] Unhandled error`, error);
  }

  res.status(statusCode).json({
    success: false,
    requestId: req.context.requestId,
    error: {
      message: isKnownError ? error.message : "Internal server error",
      details: isKnownError ? error.details : undefined,
    },
  });
}

module.exports = errorHandler;
