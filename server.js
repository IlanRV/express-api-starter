const express = require("express");
const cors = require("cors");
const logger = require("./middleware/logger");
const usersRouter = require("./routes/users");

const app = express();
const PORT = process.env.PORT || 3000;

// --------------- Middleware ---------------
app.use(cors());
app.use(express.json());
app.use(logger);

// --------------- Routes ---------------
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/users", usersRouter);

// --------------- Start ---------------
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
