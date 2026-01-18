# Healthcare Wellness Preventive Care Portal — Backend

Node/Express + MongoDB backend skeleton for user and provider authentication, profile management, and medical record storage.

## Stack
- Node.js 18+
- Express 5
- Mongoose 9
- bcrypt 6
- uuid 13

## Quick start
1) `cd Backend`
2) `npm install`
3) Add middleware and database connection (see notes below).
4) `node index.js` (runs on port 3000 by default).

## Project layout
- `index.js` — Express app bootstrap and global error handler.
- `Controllers/Provider.controller.js` — Provider sign-up, login, and profile CRUD.
- `Controllers/User.controller.js` — User sign-up, login, and profile CRUD.
- `Models/` — Mongoose schemas for users, providers, medical records, and blacklist entries.
- `routers/auth.router.js` — Placeholder for API routes (currently empty).