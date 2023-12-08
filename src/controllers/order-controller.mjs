import {createOrder} from '../models/order-model.mjs';

const postOrder = async (req, res) => {
  if (!req.user) {
    res.sendStatus(403);
  } else {
    console.log(req.user);
    const result = await createOrder(req.user.user_id);
    if (!result.error) {
      res.json({order_id: result});
    } else {
      res.sendStatus(404);
    }
  }
};

const postOrderById = async (req, res) => {
  // sends an existing order to be done, changes the order status etc
};

const getOrders = async (req, res) => {
  // gets existing orders
};

const getOrderById = async (req, res) => {
  // gets a singular order (and probably its cart) by id
};

export {postOrder, postOrderById, getOrders, getOrderById};
