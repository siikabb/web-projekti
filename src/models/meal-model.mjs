import promisePool from '../utils/database.mjs';

const listMealItems = async () => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM Products');
    console.log(rows);
    return rows;
  } catch (e) {
    console.error('error', e.message);
    return {error: emessage};
  }
};

const findMealById = async (id) => {
  try {
    const [rows] = await promisePool.query(
      'SELECT * FROM Products WHERE product_id = ?',
      [id]
    );
    console.log(rows[0]);
    return rows[0];
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

// TODO: add model for adding meal items
const addMealItem = async (meal) => {
  const {product_name, price, description, image_url} = meal;
  const sql = `INSERT INTO Products (name, price, description, image_url) VALUES (?, ?, ?, ?)`;
  const params = [product_name, price, description, image_url];
  try {
    const rows = await promisePool.query(sql, params);
    console.log('rows', rows);
    return {product_id: rows[0].insertId};
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

export {listMealItems, findMealById, addMealItem};
