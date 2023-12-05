import {validationResult} from 'express-validator';
import {addUser} from '../models/user-model.mjs';

const postUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }
  const newUserId = await addUser(req.body);
  res.json({message: 'new user added', user_id: newUserId});
};

export {postUser};
