import express, { Router, Request, Response } from 'express';
import { Goal } from '../models/Goal';

const router: Router = express.Router();

// GET all goals for a user
router.get('/:userId', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { status } = req.query;

    const query: any = { userId };
    if (status) query.status = status;

    const goals = await Goal.find(query).sort({ createdAt: -1 });
    res.json(goals);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch goals' });
  }
});

// POST create a new goal
router.post('/', async (req: Request, res: Response) => {
  try {
    const { userId, title, description, type, targetValue, unit, startDate, endDate } = req.body;

    if (!userId || !title || !type || targetValue === undefined || !unit || !endDate) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const goal = new Goal({
      userId,
      title,
      description,
      type,
      targetValue,
      unit,
      startDate: startDate ? new Date(startDate) : new Date(),
      endDate: new Date(endDate),
    });

    await goal.save();
    res.status(201).json(goal);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create goal' });
  }
});

// GET goal by ID
router.get('/:userId/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const goal = await Goal.findById(id);

    if (!goal) {
      return res.status(404).json({ error: 'Goal not found' });
    }

    res.json(goal);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch goal' });
  }
});

// PATCH update goal
router.patch('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedGoal = await Goal.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedGoal) {
      return res.status(404).json({ error: 'Goal not found' });
    }

    res.json(updatedGoal);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update goal' });
  }
});

// DELETE goal
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedGoal = await Goal.findByIdAndDelete(id);

    if (!deletedGoal) {
      return res.status(404).json({ error: 'Goal not found' });
    }

    res.json({ message: 'Goal deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete goal' });
  }
});

export default router;
