import express from 'express';
import {body} from 'express-validator';
import {postUser} from '../controllers/user-controller.mjs';

const userRouter = express.Router();

// routes for /api/users/
userRouter
  .route('/')
  .post(
    body('email').trim().isEmail(),
    body('password').trim().isLength({min: 8}),
    postUser
  );

export {userRouter};
