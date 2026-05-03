function getEnv() {
  return {
    env: process.env.NODE_ENV || "development",
    port: Number(process.env.PORT || 3000),
    serviceName: process.env.SERVICE_NAME || "express-api-starter",
  };
}

module.exports = { getEnv };
