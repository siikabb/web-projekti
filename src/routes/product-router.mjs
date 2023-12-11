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

/**
 * @api {get} /api/products Get all products
 * @apiName GetProducts
 * @apiGroup Products
 *
 * @apiSuccess {Object[]} products List of products.
 */

/**
 * @api {post} /api/products Create a new product
 * @apiName PostProduct
 * @apiGroup Products
 *
 * @apiParam {String} name Name of the product.
 * @apiParam {Number} price Price of the product.
 *
 * @apiSuccess {Object} product The created product.
 */

productRouter.route('/').get(getProducts).post(authenticateToken, postProduct);

/**
 * @api {get} /api/products/:id Get a product by ID
 * @apiName GetProductById
 * @apiGroup Products
 *
 * @apiParam {String} id ID of the product.
 *
 * @apiSuccess {Object} product The requested product.
 */

/**
 * @api {put} /api/products/:id Update a product
 * @apiName PutProduct
 * @apiGroup Products
 *
 * @apiParam {String} id ID of the product.
 * @apiParam {String} name Updated name of the product.
 * @apiParam {Number} price Updated price of the product.
 *
 * @apiSuccess {Object} product The updated product.
 */

/**
 * @api {delete} /api/products/:id Delete a product
 * @apiName DeleteProduct
 * @apiGroup Products
 *
 * @apiParam {String} id ID of the product.
 *
 * @apiSuccess {String} message Success message.
 */

productRouter
  .route('/:id/')
  .get(getProductById)
  .put(authenticateToken, putProduct)
  .delete(authenticateToken, deleteProduct);

export {productRouter};
