import {addItemToOrder} from '../models/cart-model.mjs';

const postCart = async (req, res) => {
  // adds a new item to the order
  if (!req.params.order_id || !req.params.product_id) {
    res.sendStatus(404);
  } else {
    const result = await addItemToOrder(
      req.params.order_id,
      req.params.product_id
    );
    if (result) {
      res.sendStatus(201);
    } else {
      res.sendStatus(500);
    }
  }
  // TODO: check if order by the id exists and if yes, check that the order status is correct
  // TODO: check if the product by the id exists
};

export {postCart};
