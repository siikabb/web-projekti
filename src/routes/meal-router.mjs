import express from 'express';
import {
  getMealItemById,
  getMealItems,
} from '../controllers/meal-controller.mjs';

const mealRouter = express.Router();

// routes for /api/meals/
mealRouter.route('/').get(getMealItems);

// routes for /api/meals/:id/
mealRouter.route('/:id/').get(getMealItemById);

export {mealRouter};
