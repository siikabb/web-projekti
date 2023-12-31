import {
  changeOrderStatus,
  createOrder,
  findOrderCart,
  finishOrder,
  listOrders,
} from '../models/order-model.mjs';

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
  const result = await finishOrder(req.params.id);
  if (!result.error) {
    res.json({message: 'Order made successfully', ...result});
  } else {
    res.sendStatus(500);
  }
};

const getOrders = async (req, res) => {
  if (req.user.user_level !== 0) {
    res.sendStatus(403);
  } else {
    const result = await listOrders();
    if (!result.error) {
      res.json(result);
    } else {
      res.sendStatus(500);
    }
  }
};

const getOrderById = async (req, res) => {
  const result = await findOrderCart(req.params.id);
  if (!result.error) {
    res.json(result);
  } else {
    res.sendStatus(500);
  }
};

const putOrderById = async (req, res) => {
  const result = await changeOrderStatus(req.params.id, req.body.order_status);
  if (!result.error) {
    res.json({message: 'Order status changed successfully'});
  } else {
    res.sendStatus(500);
  }
};

export {postOrder, postOrderById, getOrders, getOrderById, putOrderById};
