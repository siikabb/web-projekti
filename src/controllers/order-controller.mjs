import meals from '../mock-data/meals.json' assert {type: 'json'};

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
