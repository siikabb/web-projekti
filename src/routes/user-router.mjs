import express from 'express';

const userRouter = express.Router();

// routes for /api/users/
userRouter.route('/');

export {userRouter};
