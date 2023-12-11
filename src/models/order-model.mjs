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

const listOrders = async () => {
  try {
    const sql = `SELECT * FROM Orders`;
    const [rows] = await promisePool.query(sql);
    return rows;
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

const findOrderCart = async (order_id) => {
  try {
    let sql = `SELECT * FROM Orders WHERE order_id = ?`;
    let [rows] = await promisePool.query(sql, [order_id]);
    sql = `SELECT product_id FROM Cart WHERE order_id = ?`;
    rows.push((await promisePool.query(sql, [order_id]))[0]);
    return rows;
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

export {createOrder, listOrders, findOrderCart};
