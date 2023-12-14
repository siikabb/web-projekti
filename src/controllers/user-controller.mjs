import {validationResult} from 'express-validator';
import {addUser, findUsers} from '../models/user-model.mjs';
import bcrypt from 'bcryptjs';

const postUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(400).json({message: 'invalid input fields'});
  }
  const newUser = req.body;
  const salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(newUser.password, salt);
  const newUserId = await addUser(newUser);
  res.json({message: 'new user added', user_id: newUserId});
};

const getUsers = async (req, res) => {
  if (req.user.user_level !== 0) {
    res.sendStatus(403);
  } else {
    try {
      const users = await findUsers();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({message: 'Server error'});
    }
  }
};

export {postUser, getUsers};
