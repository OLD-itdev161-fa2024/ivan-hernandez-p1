import express from 'express';
import connectDatabase from './config/db';
const router = express.Router();
const Product = require('./products.json');

const app = express();



connectDatabase();


app.get('/', (req, res) =>
    res.send('Hello')
);

router.get('/products', async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  module.exports = router;

app.listen(3000, () => console.log(`Express server running on port 3000`));
