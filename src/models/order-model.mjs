import promisePool from '../utils/database.mjs';

const createOrder = async (user_id) => {
  try {
    const sql = `INSERT INTO Orders (user_id, order_status) VALUES (?, 1)`;
    // order status defaults to 1
    const result = await promisePool.query(sql, user_id);
    return result[0].insertId;
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

export {createOrder};
