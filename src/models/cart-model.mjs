import promisePool from '../utils/database.mjs';

const addItemToOrder = async (order_id, product_id) => {
  try {
    const sql = `INSERT INTO Cart (order_id, product_id) VALUES (?, ?)`;
    const params = [order_id, product_id];
    const result = await promisePool.query(sql, params);
    return result[0].insertId;
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

export {addItemToOrder};
