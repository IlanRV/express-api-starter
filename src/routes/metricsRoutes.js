const express = require("express");
const metricsController = require("../controllers/metricsController");

const router = express.Router();

router.get("/summary", metricsController.getSummary);

module.exports = router;
