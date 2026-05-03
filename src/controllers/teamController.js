const teamService = require("../services/teamService");
const { created, ok } = require("../utils/responses");

function listTeams(_req, res) {
  const teams = teamService.listTeams();

  res.json(ok(teams, { count: teams.length }));
}

function getTeam(req, res) {
  const team = teamService.getTeam(req.params.teamId);

  res.json(ok(team));
}

function addTeamMember(req, res) {
  const team = teamService.addTeamMember(req.params.teamId, req.body, req.context);

  res.status(201).json(created(team));
}

module.exports = {
  listTeams,
  getTeam,
  addTeamMember,
};
