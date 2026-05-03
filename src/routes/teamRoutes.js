const express = require("express");
const teamController = require("../controllers/teamController");

const router = express.Router();

router.get("/", teamController.listTeams);
router.get("/:teamId", teamController.getTeam);
router.post("/:teamId/members", teamController.addTeamMember);

module.exports = router;
