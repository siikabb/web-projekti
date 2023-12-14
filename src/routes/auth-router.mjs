import express from 'express';
import {getMe, postLogin} from '../controllers/auth-controller.mjs';
import {authenticateToken} from '../middlewares/authentication.mjs';

const authRouter = express.Router();

/**
 * @api {post} /api/auth/login Login
 * @apiName Login
 * @apiGroup Authentication
 *
 * @apiParam {String} username User's username.
 * @apiParam {String} password User's password.
 *
 * @apiSuccess {String} token Authentication token.
 *
 * @apiError {String} message Error message.
 */
authRouter.route('/login').post(postLogin);

/**
 * @api {get} /api/auth/me Get User Details
 * @apiName GetMe
 * @apiGroup Authentication
 *
 * @apiHeader {String} Authorization User's authentication token.
 *
 * @apiSuccess {String} username User's username.
 * @apiSuccess {String} email User's email.
 *
 * @apiError {String} message Error message.
 */
authRouter.route('/me').get(authenticateToken, getMe);

export {authRouter};
