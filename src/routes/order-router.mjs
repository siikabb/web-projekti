import express from 'express';
import {authenticateToken} from '../middlewares/authentication.mjs';
import {
  getOrderById,
  getOrders,
  postOrder,
} from '../controllers/order-controller.mjs';

const orderRouter = express.Router();

// routes for /api/order/
orderRouter.route('/').get(getOrders).post(authenticateToken, postOrder);

orderRouter.route('/:id/').get(getOrderById);

export {orderRouter};
