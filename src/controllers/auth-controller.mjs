import jwt from 'jsonwebtoken';
import 'dotenv/config';
import {login} from '../models/user-model.mjs';
import promisePool from '../utils/database.mjs';

const postLogin = async (req, res) => {
  console.log('postLogin', req.body);
  const user = await login(req.body);
  if (user) {
    const token = jwt.sign(user, process.env.JWT_SECRET, {expiresIn: '24h'});
    res.json({...user, token});
  } else {
    res.sendStatus(401);
  }
};

const getMe = async (req, res) => {
  // TODO: currently returns promisePool is not defined for some reason
  // TODO: fix authorization to work properly
  console.log('getMe', req.user);
  if (req.user) {
    res.json({message: 'token ok', user: req.user});
  } else {
    res.sendStatus(401);
  }
};

export {postLogin, getMe};
