import {
  addProduct,
  editProduct,
  findProductById,
  listProducts,
  removeProduct,
} from '../models/product-model.mjs';
import promisePool from '../utils/database.mjs';

// !!! remember to use async !!!

const getProducts = async (req, res) => {
  // function for getting products
  const result = await listProducts();
  if (!result.error) {
    res.json(result);
  } else {
    res.status(500);
    res.json(result);
  }
};

const getProductById = async (req, res) => {
  // function for getting a singular product by id
  const result = await findProductById(req.params.id);
  if (result) {
    res.json(result);
  } else {
    res.sendStatus(404);
  }
};

const postProduct = async (req, res) => {
  console.log('postProduct', req.body);
  const {product_name, price, description, image_url} = req.body;
  if (product_name && price) {
    const result = await addProduct({
      product_name,
      price,
      description,
      image_url,
    });
    if (result.product_id) {
      res.status(201);
      res.json({message: 'New product added', ...result});
    } else {
      res.status(500);
      res.json(result);
    }
  } else {
    res.sendStatus(400);
  }
  // TODO: authentication needed to prevent from everyone doing stuff
};

const putProduct = async (req, res) => {
  console.log(req.params.id);
  console.log('putProduct', req.params.id, req.body);
  const {product_name, price, description, image_url} = req.body;
  if (findProductById(req.params.id)) {
    const result = await editProduct(req.params.id, {
      product_name,
      price,
      description,
      image_url,
    });
    if (result.product_id) {
      res.status(200);
      res.json({message: 'Product edited successfully', ...result});
    } else {
      res.status(500);
      res.json(result);
    }
  } else {
    res.sendStatus(404);
  }
};

const deleteProduct = async (req, res) => {
  if (findProductById(req.params.id)) {
    const result = await removeProduct(req.params.id);
    if (result.product_id) {
      res.status(200);
      res.json({message: 'Product deleted successfully', ...result});
    } else {
      res.status(500);
      res.json(result);
    }
  } else {
    res.sendStatus(404);
  }
};

export {getProducts, getProductById, postProduct, putProduct, deleteProduct};
