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
  try {
    const sql = `INSERT INTO Users (email, password, user_level) VALUES (?, ?, ?)`;
    // user level defaults to 2
    const params = [userData.email, userData.password, 2];
    const result = await promisePool.query(sql, params);
    return result[0].insertId;
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

export {login, addUser};
