import express from 'express';
import {authenticateToken} from '../middlewares/authentication.mjs';
import {
  getOrderById,
  getOrders,
  postOrder,
  postOrderById,
  putOrderById,
} from '../controllers/order-controller.mjs';

const orderRouter = express.Router();

// routes for /api/order/
orderRouter
  .route('/')
  .get(authenticateToken, getOrders)
  .post(authenticateToken, postOrder);

orderRouter
  .route('/:id/')
  .get(getOrderById)
  .post(postOrderById)
  .put(putOrderById);

export {orderRouter};
