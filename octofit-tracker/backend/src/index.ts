import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import workoutRoutes from './routes/workouts';
import goalRoutes from './routes/goals';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit-tracker';

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Health Check Route
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ 
    status: 'ok', 
    message: 'OctoFit Tracker API is running 🚀',
    timestamp: new Date().toISOString()
  });
});

// Root Endpoint
app.get('/', (req: Request, res: Response) => {
  res.json({ 
    message: 'Welcome to OctoFit Tracker API 🐙',
    version: '0.0.1',
    endpoints: {
      health: '/api/health',
      workouts: '/api/workouts',
      goals: '/api/goals'
    }
  });
});

// Routes
app.use('/api/workouts', workoutRoutes);
app.use('/api/goals', goalRoutes);

// Error handling middleware
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

export default app;
