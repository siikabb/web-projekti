import promisePool from '../utils/database.mjs';

const listMealItems = async () => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM Products');
    console.log(rows);
    return rows;
  } catch (error) {
    console.error('error', error.message);
    return {error: error.message};
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
  } catch (error) {
    console.error('error', error.message);
    return {error: error.message};
  }
};

export {listMealItems, findMealById};
