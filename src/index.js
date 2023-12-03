import express from 'express';
import {productRouter} from './routes/product-router.mjs';

const hostname = '127.0.0.1';
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/', (req, res) => {
  res.status(200);
  res.json({message: 'Welcome to Elysium food order service internal API'});
});

// product endpoints
app.use('/api/products/', productRouter);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
