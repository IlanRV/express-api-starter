class AppError extends Error {
  constructor(message, statusCode, details) {
    super(message);
    this.name = "AppError";
    this.statusCode = statusCode;
    this.details = details;
  }
}

function badRequest(message, details) {
  return new AppError(message, 400, details);
}

function notFound(message) {
  return new AppError(message, 404);
}

module.exports = {
  AppError,
  badRequest,
  notFound,
};
