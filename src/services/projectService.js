const { badRequest, notFound } = require("../errors/AppError");
const projectRepository = require("../repositories/projectRepository");
const userRepository = require("../repositories/userRepository");
const auditService = require("./auditService");
const { createId } = require("../utils/idFactory");
const { validateProject, validateProjectStatus } = require("../validators/projectValidator");

function listProjects(filters) {
  return projectRepository.findMany(filters);
}

function getProject(projectId) {
  const project = projectRepository.findById(projectId);

  if (!project) {
    throw notFound(`Project ${projectId} was not found`);
  }

  return project;
}

function createProject(payload, context) {
  const input = validateProject(payload);
  const owner = userRepository.findById(input.ownerId);

  if (!owner) {
    throw badRequest("ownerId must reference an existing user");
  }

  const project = projectRepository.insert({
    id: createId("prj"),
    name: input.name,
    ownerId: input.ownerId,
    status: input.status || "active",
    tags: input.tags || [],
    createdAt: new Date().toISOString(),
  });

  auditService.recordEvent({
    action: "project.created",
    actor: context.actor,
    entityType: "project",
    entityId: project.id,
    metadata: { requestId: context.requestId },
  });

  return project;
}

function updateProjectStatus(projectId, payload, context) {
  const input = validateProjectStatus(payload);
  const project = projectRepository.update(projectId, { status: input.status });

  if (!project) {
    throw notFound(`Project ${projectId} was not found`);
  }

  auditService.recordEvent({
    action: "project.status_changed",
    actor: context.actor,
    entityType: "project",
    entityId: project.id,
    metadata: { status: input.status, requestId: context.requestId },
  });

  return project;
}

module.exports = {
  listProjects,
  getProject,
  createProject,
  updateProjectStatus,
};
