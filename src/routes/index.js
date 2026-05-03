const express = require("express");
const auditRoutes = require("./auditRoutes");
const healthRoutes = require("./healthRoutes");
const metricsRoutes = require("./metricsRoutes");
const projectRoutes = require("./projectRoutes");
const teamRoutes = require("./teamRoutes");
const userRoutes = require("./userRoutes");

const router = express.Router();

router.use("/health", healthRoutes);
router.use("/users", userRoutes);
router.use("/projects", projectRoutes);
router.use("/teams", teamRoutes);
router.use("/audit-events", auditRoutes);
router.use("/metrics", metricsRoutes);

module.exports = router;
