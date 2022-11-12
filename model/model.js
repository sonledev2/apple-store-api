const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  model: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Model',
  },
});

const modelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
});

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  model: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Model',
    },
  ],
});

let Product = mongoose.model('Product', productSchema);
let Model = mongoose.model('Model', modelSchema);
let Category = mongoose.model('Category', categorySchema);

module.exports = { Product, Model, Category };
