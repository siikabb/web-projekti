import meals from '../mock-data/meals.json' assert {type: 'json'};

const getMealItems = (req, res) => {
  // make a function for getting meal items
  res.json(meals);
};

const getMealItemById = (req, res) => {
  // make a function for getting a singular meal item by id
  console.log(req.params);
  const meal = meals.find((element) => element.meal_id == req.params.id);
  if (meal) {
    res.json(meal);
  } else {
    res.status(404);
    res.json({message: 'Invalid id'});
  }
};

const addMealItem = (req, res) => {
  // TODO: make a function for adding food items
  console.log(req.body);
  res.status(500); // for the moment, to ensure that server doesn't hang up
  // TODO: integrate SQL before doing this to prevent pointless extra work
};

const editMealItem = (req, res) => {
  // TODO: make a function for editing food items
};
const deleteMealItem = (req, res) => {
  // TODO: make a function for deleting food items
};

export {getMealItems, getMealItemById, addMealItem};
