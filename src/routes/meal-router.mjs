import express from 'express';
import {
  getMealItemById,
  getMealItems,
  postMealItem,
} from '../controllers/meal-controller.mjs';

const mealRouter = express.Router();

// routes for /api/meals/
mealRouter.route('/').get(getMealItems).post(postMealItem);

// routes for /api/meals/:id/
mealRouter.route('/:id/').get(getMealItemById);

export {mealRouter};
