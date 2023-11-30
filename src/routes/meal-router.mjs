import express from 'express';
import {
  deleteMealItem,
  getMealItemById,
  getMealItems,
  postMealItem,
  putMealItem,
} from '../controllers/meal-controller.mjs';

const mealRouter = express.Router();

// routes for /api/meals/
mealRouter.route('/').get(getMealItems).post(postMealItem);

// routes for /api/meals/:id/
mealRouter
  .route('/:id/')
  .get(getMealItemById)
  .put(putMealItem)
  .delete(deleteMealItem);

export {mealRouter};
