import express from 'express';
import {getMe, postLogin} from '../controllers/auth-controller.mjs';
import {authenticateToken} from '../middlewares/authentication.mjs';

const authRouter = express.Router();

// routes for /api/auth/login
authRouter.route('/login').post(postLogin);

// routes for /api/auth/me
authRouter.route('/me').get(authenticateToken, getMe);

export {authRouter};
