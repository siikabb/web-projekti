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

const addMealItem = async (meal) => {
  const {product_name, price, description, image_url} = meal;
  const sql = `INSERT INTO Products (name, price, description, image_url) VALUES (?, ?, ?, ?)`;
  const params = [product_name, price, description, image_url];
  try {
    const rows = await promisePool.query(sql, params);
    // console.log('rows', rows);
    return {product_id: rows[0].insertId};
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

const editMeal = async (id, meal) => {
  const {product_name, price, description, image_url} = meal;
  const sql = `UPDATE Products SET name = ? WHERE product_id = ?`;
  // TODO: make work properly, currently only edits meal name
  const params = [product_name, id];
  try {
    const rows = await promisePool.query(sql, params);
    console.log('rows', rows[0]);
    return {product_id: rows[0]};
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

export {listMealItems, findMealById, addMealItem, editMeal};
