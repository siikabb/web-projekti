const meals = [
  {
    meal_id: 0,
    meal_name: 'steak',
    meal_price: '20.50',
  },
  {
    meal_id: 1,
    meal_name: 'soup',
    meal_price: '12.50',
  },
];

const foodOrderById = (req, res) => {
  const meal = meals.find((element) => element.meal_id == req.params.id);
  if (meal) {
    res.status(200);
    console.log('Food order', req.params.id);
    res.json({message: `Order registered successfully`, meal});
  } else {
    res.status(404);
    console.log('Incorrect meal id');
    res.json({message: 'Incorrect meal id'});
  }
};

export {foodOrderById};
