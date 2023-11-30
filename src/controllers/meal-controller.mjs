import meals from '../mock-data/meals.json' assert {type: 'json'};
import {
  addMealItem,
  findMealById,
  listMealItems,
} from '../models/meal-model.mjs';
import promisePool from '../utils/database.mjs';

// !!! remember to use async !!!

const getMealItems = async (req, res) => {
  // function for getting meal items
  const result = await listMealItems();
  if (!result.error) {
    res.json(result);
  } else {
    res.status(500);
    res.json(result);
  }
};

const getMealItemById = async (req, res) => {
  // function for getting a singular meal item by id
  const result = await findMealById(req.params.id);
  if (result) {
    res.json(result);
  } else {
    res.sendStatus(404);
  }
};

const postMealItem = async (req, res) => {
  console.log('postMealItem', req.body);
  const {product_name, price, description, image_url} = req.body;
  if (product_name && price) {
    const result = await addMealItem({
      product_name,
      price,
      description,
      image_url,
    });
    if (result.product_id) {
      res.status(201);
      res.json({message: 'New meal added', ...result});
    } else {
      res.status(500);
      res.json(result);
    }
  } else {
    res.sendStatus(400);
  }
  // res.status(500); // for the moment, to ensure that server doesn't hang up
  // TODO: authentication needed to prevent from everyone doing stuff
};

const editMealItem = (req, res) => {
  // TODO: make a function for editing food items
};
const deleteMealItem = (req, res) => {
  // TODO: make a function for deleting food items
};

export {getMealItems, getMealItemById, postMealItem};
