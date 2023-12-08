import express from 'express';
import {authenticateToken} from '../middlewares/authentication.mjs';
import {postOrder} from '../controllers/order-controller.mjs';

const orderRouter = express.Router();

// routes for /api/order/
orderRouter.route('/').post(authenticateToken, postOrder);

export {orderRouter};
