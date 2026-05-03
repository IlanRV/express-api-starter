const express = require("express");
const cors = require("cors");

const routes = require("./routes");
const requestContext = require("./middleware/requestContext");
const requestLogger = require("./middleware/requestLogger");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(requestContext);
app.use(requestLogger);

app.use("/api", routes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
