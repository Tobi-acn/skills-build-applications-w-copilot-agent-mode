import mongoose, { Schema, Document } from 'mongoose';

export interface IWorkout extends Document {
  userId: string;
  date: Date;
  type: 'cardio' | 'strength' | 'flexibility' | 'sports';
  duration: number;
  intensity: 'light' | 'moderate' | 'high';
  caloriesBurned: number;
  notes: string;
  createdAt: Date;
  updatedAt: Date;
}

const WorkoutSchema: Schema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      index: true,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    type: {
      type: String,
      enum: ['cardio', 'strength', 'flexibility', 'sports'],
      required: true,
    },
    duration: {
      type: Number,
      required: true,
      min: 1,
    },
    intensity: {
      type: String,
      enum: ['light', 'moderate', 'high'],
      required: true,
    },
    caloriesBurned: {
      type: Number,
      required: true,
      min: 0,
    },
    notes: {
      type: String,
      maxlength: 500,
    },
  },
  { timestamps: true }
);

export const Workout = mongoose.model<IWorkout>('Workout', WorkoutSchema);
