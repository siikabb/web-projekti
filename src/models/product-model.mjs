import promisePool from '../utils/database.mjs';

const listProducts = async () => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM Products');
    console.log(rows);
    return rows;
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

const findProductById = async (id) => {
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

const addProduct = async (product) => {
  const {product_name, price, description, type} = product;
  const sql = `INSERT INTO Products (name, price, description, type) VALUES (?, ?, ?, ?)`;
  const params = [product_name, price, description, type];
  try {
    const rows = await promisePool.query(sql, params);
    // console.log('rows', rows);
    return {product_id: rows[0].insertId};
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

const editProduct = async (id, product) => {
  const {product_name, price, description, type} = product;
  // const sql = `UPDATE Products SET name = ?, price = ?, description = ?, image_url = ? WHERE product_id = ?`;
  // const params = [product_name, price, description, image_url, id];
  let sql = 'UPDATE Products SET ';
  let updates = [];
  let params = [];

  if (product_name !== null && product_name !== undefined) {
    updates.push('name = ?');
    params.push(product_name);
  }
  if (price !== null && price !== undefined) {
    updates.push('price = ?');
    params.push(price);
  }
  if (description !== null && description !== undefined) {
    updates.push('description = ?');
    params.push(description);
  }
  if (type !== null && type !== undefined) {
    updates.push('type = ?');
    params.push(type);
  }

  sql += updates.join(', ') + ' WHERE product_id = ?';
  params.push(id);
  try {
    const rows = await promisePool.query(sql, params);
    console.log('rows', rows[0]);
    return {product_id: rows[0]};
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

const removeProduct = async (id) => {
  const sql = `DELETE FROM Products WHERE product_id = ?`;
  try {
    const rows = await promisePool.query(sql, id);
    console.log('rows', rows[0]);
    return {product_id: rows[0]};
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

export {listProducts, findProductById, addProduct, editProduct, removeProduct};
