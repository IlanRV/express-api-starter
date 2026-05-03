# Express API Starter

Express API Starter is a JavaScript-only demo backend for DevHub extraction. It models a small project-management API with layered routing, controllers, services, repositories, validators, request middleware, audit events, and runtime metrics.

## Architecture

- `server.js` starts the HTTP server and exports the app for smoke tests.
- `src/app.js` wires Express, CORS, JSON parsing, request context, request logging, routes, 404 handling, and centralized errors.
- `src/routes` defines HTTP resources for health, users, projects, teams, audit events, and metrics.
- `src/controllers` translates Express requests into service calls.
- `src/services` owns business workflows such as creating users, assigning projects, recording audit events, and calculating summaries.
- `src/repositories` provides an in-memory persistence boundary seeded from `src/data/seedData.js`.
- `src/validators` keeps request validation separate from controllers.
- `src/utils` contains response helpers, IDs, pagination, and collection utilities.

## API Surface

- `GET /api/health` returns uptime and service metadata.
- `GET /api/users` lists users and can filter by role.
- `POST /api/users` creates a user and records an audit event.
- `PATCH /api/users/:userId` updates profile fields.
- `GET /api/projects` lists projects and can filter by owner, team, or status.
- `POST /api/projects` creates a project for an existing user and team.
- `PATCH /api/projects/:projectId/status` changes project state.
- `GET /api/teams` lists teams with their members.
- `POST /api/teams/:teamId/members` adds a user to a team.
- `GET /api/audit-events` returns recent audit entries.
- `GET /api/metrics/summary` returns aggregate counts for dashboards.

## Demo Goals

This repository is intentionally broad enough for automated README generation to identify:

- Express route topology and preview paths.
- Node.js runtime scripts.
- Layered backend architecture.
- Named functions and classes across controllers, services, repositories, validators, and utilities.
- Domain concepts such as users, teams, projects, audit events, metrics, and health checks.

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000/api/health`.
