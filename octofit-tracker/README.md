# OctoFit Tracker

A modern multi-tier fitness tracking application built with GitHub Copilot Agent Mode.

## Architecture

- **Frontend**: React 19 + Vite (Port 5173)
- **Backend**: Node.js + Express + TypeScript (Port 8000)
- **Database**: MongoDB (Port 27017)

## Project Structure

```
octofit-tracker/
├── frontend/          # React 19 + Vite application
│   ├── src/
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
└── backend/           # Express + TypeScript API
    ├── src/
    ├── tsconfig.json
    └── package.json
```

## Setup Instructions

### Backend
```bash
cd octofit-tracker/backend
npm install
npm run dev
```

### Frontend
```bash
cd octofit-tracker/frontend
npm install
npm run dev
```

### Database
Ensure MongoDB is running on port 27017.

## API Endpoints

- `GET /api/health` - Health check endpoint

## Environment Variables

Backend default configuration:
- Port: 8000
- MongoDB URI: mongodb://localhost:27017/octofit-tracker
