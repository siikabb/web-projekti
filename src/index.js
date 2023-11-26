import express from 'express';
import {foodOrderById} from './controllers/order-controller.mjs';
import {addMealItem} from './controllers/meal-controller.mjs';

const hostname = '127.0.0.1';
const app = express();
const port = 3000;

app.get('/api/', (req, res) => {
  res.status(200);
  res.json({message: 'Welcome to Elysium food order service internal API'});
});

app.get('/api/meals/:id/order', foodOrderById);

app.post('/api/meals/:id', addMealItem);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
