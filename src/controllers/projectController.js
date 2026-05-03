const projectService = require("../services/projectService");
const { created, ok } = require("../utils/responses");

function listProjects(req, res) {
  const projects = projectService.listProjects({
    ownerId: req.query.ownerId,
    teamId: req.query.teamId,
    status: req.query.status,
  });

  res.json(ok(projects, { count: projects.length }));
}

function getProject(req, res) {
  const project = projectService.getProject(req.params.projectId);

  res.json(ok(project));
}

function createProject(req, res) {
  const project = projectService.createProject(req.body, req.context);

  res.status(201).json(created(project));
}

function updateProjectStatus(req, res) {
  const project = projectService.updateProjectStatus(req.params.projectId, req.body, req.context);

  res.json(ok(project));
}

module.exports = {
  listProjects,
  getProject,
  createProject,
  updateProjectStatus,
};
