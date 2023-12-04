import express from 'express';
import {productRouter} from './routes/product-router.mjs';
import {authRouter} from './routes/auth-router.mjs';

const hostname = '127.0.0.1';
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/api/', (req, res) => {
  res.status(200);
  res.json({message: 'Welcome to Elysium food order service internal API'});
});

// product endpoints
app.use('/api/products/', productRouter);
app.use('/api/auth/', authRouter);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
