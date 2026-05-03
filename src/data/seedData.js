const users = [
  {
    id: "usr_1001",
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "admin",
    createdAt: "2026-05-01T09:00:00.000Z",
  },
  {
    id: "usr_1002",
    name: "Bob Smith",
    email: "bob@example.com",
    role: "developer",
    createdAt: "2026-05-01T09:15:00.000Z",
  },
  {
    id: "usr_1003",
    name: "Carla Nguyen",
    email: "carla@example.com",
    role: "viewer",
    createdAt: "2026-05-01T09:30:00.000Z",
  },
];

const projects = [
  {
    id: "prj_2001",
    name: "Billing API",
    ownerId: "usr_1001",
    teamId: "team_4001",
    status: "active",
    tags: ["finance", "api"],
    createdAt: "2026-05-02T10:00:00.000Z",
  },
  {
    id: "prj_2002",
    name: "Support Dashboard",
    ownerId: "usr_1002",
    teamId: "team_4002",
    status: "paused",
    tags: ["internal", "dashboard"],
    createdAt: "2026-05-02T11:00:00.000Z",
  },
  {
    id: "prj_2003",
    name: "Usage Insights",
    ownerId: "usr_1002",
    teamId: "team_4001",
    status: "active",
    tags: ["analytics", "reporting"],
    createdAt: "2026-05-02T12:30:00.000Z",
  },
];

const teams = [
  {
    id: "team_4001",
    name: "Platform",
    description: "Owns shared APIs, billing services, and reliability workflows.",
    memberIds: ["usr_1001", "usr_1002"],
    createdAt: "2026-05-01T08:00:00.000Z",
  },
  {
    id: "team_4002",
    name: "Customer Ops",
    description: "Builds internal support tooling and customer-facing operational dashboards.",
    memberIds: ["usr_1003"],
    createdAt: "2026-05-01T08:30:00.000Z",
  },
];

const auditEvents = [
  {
    id: "evt_3001",
    action: "project.created",
    actor: "system",
    entityType: "project",
    entityId: "prj_2001",
    timestamp: "2026-05-02T10:00:00.000Z",
  },
  {
    id: "evt_3002",
    action: "user.invited",
    actor: "system",
    entityType: "user",
    entityId: "usr_1003",
    timestamp: "2026-05-02T10:05:00.000Z",
  },
];

module.exports = { users, projects, teams, auditEvents };
