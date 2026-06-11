# 🐙 OctoFit Tracker

A modern multi-tier fitness tracking application built with React 19, Node.js/Express, and MongoDB.

## Project Structure

```
octofit-tracker/
├── frontend/          # React 19 + Vite application
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── backend/           # Node.js + Express + TypeScript API
│   ├── src/
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

## Tech Stack

### Frontend
- **React 19** - Latest React with modern features
- **Vite** - Next-generation build tool
- **Port:** 5173

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **TypeScript** - Type-safe development
- **Mongoose** - MongoDB object modeling
- **Port:** 8000

### Database
- **MongoDB** - Document database
- **Port:** 27017

## Setup Instructions

### Prerequisites
- Node.js 18+ installed
- MongoDB running locally or a MongoDB Atlas connection string

### Backend Setup

```bash
cd octofit-tracker/backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start the server
npm run dev
```

The API will be available at `http://localhost:8000`

### Frontend Setup

```bash
cd octofit-tracker/frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

### Backend
- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run compiled application

### Frontend
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## API Endpoints

- `GET /api/health` - Health check endpoint

## Environment Variables

Create a `.env` file in the backend directory:

```
PORT=8000
MONGODB_URI=mongodb://localhost:27017/octofit-tracker
NODE_ENV=development
```

## Development

Both frontend and backend support hot module reloading (HMR) for rapid development.

---

**Happy coding with OctoFit Tracker! 🚀**
