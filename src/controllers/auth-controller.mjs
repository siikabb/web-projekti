import jwt from 'jsonwebtoken';
import 'dotenv/config';
import {login} from '../models/user-model.mjs';
import promisePool from '../utils/database.mjs';
import bcrypt from 'bcryptjs';

const postLogin = async (req, res) => {
  // returns a bearer token if login information is correct
  const user = await login(req.body.email);
  if (!user) {
    const error = new Error('email/password invalid');
    res.sendStatus(401);
  } else {
    const match = await bcrypt.compare(req.body.password, user.password);
    if (match) {
      delete user.password;
      const token = jwt.sign(user, process.env.JWT_SECRET, {expiresIn: '24h'});
      res.json({message: 'logged in', token, user});
    } else {
      res.sendStatus(401);
    }
  }
  // if (user) {
  //   res.json({...user, token});
  // } else {
  //   res.sendStatus(401);
  // }
};

const getMe = async (req, res) => {
  // gets userdata from a bearer token
  console.log('getMe', req.user);
  if (req.user) {
    res.json({message: 'token ok', user: req.user});
  } else {
    res.sendStatus(401);
  }
};

export {postLogin, getMe};
