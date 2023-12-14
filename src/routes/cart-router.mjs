import express from 'express';
import {postCart} from '../controllers/cart-controller.mjs';
import {authenticateToken} from '../middlewares/authentication.mjs';

const cartRouter = express.Router();

// routes for /api/cart/:id/
cartRouter.route('/').get();

// routes for /api/cart/:order_id/:product_id/
cartRouter.route('/:order_id/:product_id/').post(authenticateToken, postCart);

export {cartRouter};
