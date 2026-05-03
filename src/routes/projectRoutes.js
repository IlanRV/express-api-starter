const express = require("express");
const projectController = require("../controllers/projectController");

const router = express.Router();

router.get("/", projectController.listProjects);
router.get("/:projectId", projectController.getProject);
router.post("/", projectController.createProject);
router.patch("/:projectId/status", projectController.updateProjectStatus);

module.exports = router;
