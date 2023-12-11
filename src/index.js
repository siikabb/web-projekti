import express from 'express';
import {productRouter} from './routes/product-router.mjs';
import {authRouter} from './routes/auth-router.mjs';
import {userRouter} from './routes/user-router.mjs';
import {orderRouter} from './routes/order-router.mjs';
import path from 'path';

const hostname = '127.0.0.1';
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', express.static('public'));

// app.get('/api/', (req, res) => {
//   res.status(200);
//   res.json({message: 'Welcome to Elysium food order service internal API'});
// });

// product endpoints
app.use('/products/', productRouter);
app.use('/auth/', authRouter);
app.use('/users/', userRouter);
app.use('/order/', orderRouter);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
