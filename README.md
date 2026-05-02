# Express API Starter

A lightweight, boilerplate REST API built with Express and Node.js. It provides a clean starting point for building backend services without any unnecessary complexity. The project includes users CRUD-style functionality, a simple request-logging middleware, and a health-check endpoint. Everything runs in pure JavaScript with zero native binary dependencies, making it ideal for WebAssembly-based Node.js sandboxes.

## Features

- **Health-check endpoint** — quick liveness probe at `/api/health`
- **Users CRUD** — in-memory user store with GET and POST support
- **Request logger** — logs every request's method, URL, and ISO timestamp
- **CORS enabled** — ready for cross-origin requests out of the box
- **Zero native deps** — only `express` and `cors` in production

## How to Run

```bash
# Install dependencies
npm install

# Start in development mode (auto-restart on changes)
npm run dev

# — or start in production mode —
npm start
```

The server will be available at **http://localhost:3000**.

## Endpoints

### `GET /api/health`

Returns server health information.

```json
{
  "status": "ok",
  "uptime": 12.345,
  "timestamp": "2025-01-01T00:00:00.000Z"
}
```

### `GET /api/users`

Returns the list of all users.

```json
{
  "success": true,
  "count": 2,
  "data": [
    { "id": 1, "name": "Alice Johnson", "email": "alice@example.com" },
    { "id": 2, "name": "Bob Smith", "email": "bob@example.com" }
  ]
}
```

### `POST /api/users`

Creates a new user. Send a JSON body with `name` and `email`.

```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Carol Lee", "email": "carol@example.com"}'
```

```json
{
  "success": true,
  "data": { "id": 3, "name": "Carol Lee", "email": "carol@example.com" }
}
```

## License

MIT
