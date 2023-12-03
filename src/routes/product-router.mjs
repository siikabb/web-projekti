import express from 'express';
import {
  deleteProduct,
  getProductById,
  getProducts,
  postProduct,
  putProduct,
} from '../controllers/product-controller.mjs';

const productRouter = express.Router();

// routes for /api/products/
productRouter.route('/').get(getProducts).post(postProduct);

// routes for /api/products/:id/
productRouter
  .route('/:id/')
  .get(getProductById)
  .put(putProduct)
  .delete(deleteProduct);

export {productRouter};
