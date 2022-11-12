const {
  createModel,
  getModels,
  getModel,
  updateModel,
  deleteModel,
} = require('../controllers/model.controller');

const route = require('express').Router();

route.post('/', createModel);

route.get('/', getModels);

route.get('/:id', getModel);

route.put('/:id', updateModel);

route.delete('/:id', deleteModel);

module.exports = route;
