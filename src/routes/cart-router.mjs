import express from 'express';

const cartRouter = express.Router();

// routes for /api/cart/:id/
cartRouter.route('/').get().post();

export {cartRouter};
