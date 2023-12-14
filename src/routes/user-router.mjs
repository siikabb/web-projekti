import express from 'express';
import {body} from 'express-validator';
import {getUsers, postUser} from '../controllers/user-controller.mjs';
import {authenticateToken} from '../middlewares/authentication.mjs';

const userRouter = express.Router();

// routes for /api/users/
userRouter
  .route('/')
  .post(
    body('email').trim().isEmail(),
    body('password').trim().isLength({min: 8}),
    postUser
  )
  .get(authenticateToken, getUsers);

export {userRouter};
