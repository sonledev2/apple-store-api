const { Model, Product, Category } = require('../model/model');

const createModel = async (req, res) => {
  const model = new Model(req.body);
  try {
    await model.save();
    res.send(model);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getModels = async (req, res) => {
  try {
    const models = await Model.find();
    res.status(200).json(models);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getModel = async (req, res) => {
  try {
    const model = await Model.findById(req.params.id).populate('products');
    res.status(200).json(model);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateModel = async (req, res) => {
  try {
    const model = await Model.findById(req.params.id);
    await model.updateOne({ $set: req.body });
    res.status(200).json('Updated successfully');
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteModel = async (req, res) => {
  try {
    await Product.updateMany({ model: req.params.id }, { model: null });
    await Model.findByIdAndDelete(req.params.id);
    res.status(200).json('Deleted successfully');
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { createModel, getModels, getModel, updateModel, deleteModel };
