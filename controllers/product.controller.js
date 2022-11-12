const { Model, Product, Category } = require('../model/model');

const createProduct = async (req, res) => {
  const product = new Product(req.body);
  const savedProduct = await product.save();
  try {
    await product.save();
    if (req.body.model) {
      const model = Model.findById(req.body.model);
      await model.updateOne({ $push: { products: savedProduct._id } });
    }
    res.send(savedProduct);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('model');
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    await product.updateOne({ $set: req.body });
    res.status(200).json('Updated successfully');
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Model.updateMany(
      { products: req.params.id },
      { $pull: { products: req.params.id } }
    );
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json('Deleted successfully');
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
