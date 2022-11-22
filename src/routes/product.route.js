const {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
} = require('../controllers/product.controller');

const route = require('express').Router();

route.get('/products', getProducts);

route.get('/products/:id', getProduct);

route.post('/products', createProduct);

route.patch('/products/:id', updateProduct);

route.delete('/products/:id', deleteProduct);

module.exports = route;
