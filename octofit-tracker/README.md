# 🐙 OctoFit Tracker

A modern multi-tier fitness tracking application built with React 19, Node.js/Express, and MongoDB.

## 📁 Project Structure

```
octofit-tracker/
├── frontend/          # React 19 + Vite application
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
├── backend/           # Node.js + Express + TypeScript API
│   ├── src/
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
└── README.md
```

## 🚀 Quick Start

### Frontend (Port 5173)
```bash
cd octofit-tracker/frontend
npm install
npm run dev
```

### Backend (Port 8000)
```bash
cd octofit-tracker/backend
npm install
cp .env.example .env
npm run dev
```

### MongoDB (Port 27017)
Make sure MongoDB is running on `localhost:27017`

```bash
# Using Docker (recommended)
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

## 📋 Configuration

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000
- **MongoDB**: mongodb://localhost:27017/octofit

## 🛠️ Technology Stack

- **Frontend**: React 19, Vite, Axios
- **Backend**: Node.js, Express, TypeScript
- **Database**: MongoDB with Mongoose ODM
- **Development**: ts-node, ESLint

## 📝 Features

- Health check endpoint at `/health`
- CORS enabled for frontend integration
- Request logging with Morgan
- MongoDB integration with Mongoose
- TypeScript for type-safe backend code

## 🎯 Next Steps

1. Install dependencies for both frontend and backend
2. Set up MongoDB locally or using Docker
3. Configure environment variables
4. Run the development servers
5. Build your fitness tracking features!
