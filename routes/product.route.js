const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller');

const route = require('express').Router();

route.post('/', createProduct);

route.get('/', getProducts);

route.get('/:id', getProduct);

route.put('/:id', updateProduct);

route.delete('/:id', deleteProduct);

module.exports = route;
