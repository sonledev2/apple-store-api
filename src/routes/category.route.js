const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/category.controller');

const route = require('express').Router();

route.get('/categories', getCategories);

route.get('/categories/:id', getCategory);

route.post('/categories', createCategory);

route.patch('/categories/:id', updateCategory);

route.delete('/categories/:id', deleteCategory);

module.exports = route;
