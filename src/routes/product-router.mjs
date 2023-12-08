import express from 'express';
import {
  deleteProduct,
  getProductById,
  getProducts,
  postProduct,
  putProduct,
} from '../controllers/product-controller.mjs';
import {authenticateToken} from '../middlewares/authentication.mjs';

const productRouter = express.Router();

// routes for /api/products/
productRouter.route('/').get(getProducts).post(authenticateToken, postProduct);

// routes for /api/products/:id/
productRouter
  .route('/:id/')
  .get(getProductById)
  .put(authenticateToken, putProduct)
  .delete(authenticateToken, deleteProduct);

export {productRouter};
