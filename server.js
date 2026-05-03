const app = require("./src/app");
const { getEnv } = require("./src/config/env");

const { port } = getEnv();

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Express API starter listening on http://localhost:${port}`);
  });
}

module.exports = app;
