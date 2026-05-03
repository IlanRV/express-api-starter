const express = require("express");
const auditRoutes = require("./auditRoutes");
const healthRoutes = require("./healthRoutes");
const projectRoutes = require("./projectRoutes");
const userRoutes = require("./userRoutes");

const router = express.Router();

router.use("/health", healthRoutes);
router.use("/users", userRoutes);
router.use("/projects", projectRoutes);
router.use("/audit-events", auditRoutes);

module.exports = router;
