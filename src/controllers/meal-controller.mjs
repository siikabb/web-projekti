import meals from '../mock-data/meals.json' assert {type: 'json'};
import {findMealById, listMealItems} from '../models/meal-model.mjs';
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
    res.status(404);
  }
};

const addMealItem = (req, res) => {
  // TODO: make a function for adding food items
  console.log(req.body);
  res.status(500); // for the moment, to ensure that server doesn't hang up
  // TODO: authentication needed to prevent from everyone doing stuff
};

const editMealItem = (req, res) => {
  // TODO: make a function for editing food items
};
const deleteMealItem = (req, res) => {
  // TODO: make a function for deleting food items
};

export {getMealItems, getMealItemById, addMealItem};
