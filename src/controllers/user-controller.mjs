import {validationResult} from 'express-validator';
import {addUser} from '../models/user-model.mjs';
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

export {postUser};
