import express from 'express';

const orderRouter = express.Router();

// routes for /api/order/
orderRouter.route('/').post();

export {orderRouter};
