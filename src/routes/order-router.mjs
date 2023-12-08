import express from 'express';
import {authenticateToken} from '../middlewares/authentication.mjs';
import {getOrders, postOrder} from '../controllers/order-controller.mjs';

const orderRouter = express.Router();

// routes for /api/order/
orderRouter.route('/').get(getOrders).post(authenticateToken, postOrder);

export {orderRouter};
