// TODO: REMEMBER TO ASSURE SECURITY EXTRA WELL !!!
// TODO: AUTHENTICATION AND ENCRYPTION

import promisePool from '../utils/database.mjs';

const login = async (user) => {
  try {
    const sql = `SELECT user_id, user_level FROM Users WHERE email = ? AND password = ?`;
    const params = [user.email, user.password];
    const result = await promisePool.query(sql, params);
    const [rows] = result;
    return rows[0];
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

const addUser = async (userData) => {
  // TODO: add user data to the db
};

export {login};
