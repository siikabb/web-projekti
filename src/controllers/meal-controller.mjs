import meals from '../mock-data/meals.json' assert {type: 'json'};
import {
  addMealItem,
  editMeal,
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
  // TODO: authentication needed to prevent from everyone doing stuff
};

const putMealItem = async (req, res) => {
  // TODO: make a function for editing food items
  console.log(req.params.id);
  console.log('putMealItem', req.params.id, req.body);
  const {product_name, price, description, image_url} = req.body;
  if (findMealById(req.params.id)) {
    const result = await editMeal(req.params.id, {
      product_name,
      price,
      description,
      image_url,
    });
    if (result.product_id) {
      res.status(200);
      res.json({message: 'Meal edited successfully', ...result});
    } else {
      res.status(500);
      res.json(result);
    }
  } else {
    res.sendStatus(400);
  }
};
const deleteMealItem = (req, res) => {
  // TODO: make a function for deleting food items
};

export {
  getMealItems,
  getMealItemById,
  postMealItem,
  putMealItem,
  deleteMealItem,
};
