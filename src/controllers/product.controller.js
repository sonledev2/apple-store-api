// const { model } = require('../models/prisma');
const prisma = require('../models/prisma');

const getProducts = async (req, res, next) => {
  try {
    const products = await prisma.product.findMany({
      include: { model: true },
    });
    res.json(products);
  } catch (error) {
    next(error);
  }
};

const getProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const products = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
      include: { model: true },
    });
    res.json(products);
  } catch (error) {
    next(error);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const { name, description, quantity, modelId } = req.body;
    const product = await prisma.product.create({
      data: {
        name: name,
        description: description,
        quantity: parseInt(quantity),
        modelId: parseInt(modelId),
      },
      include: {
        model: true,
      },
    });
    res.json(product);
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.update({
      where: {
        id: Number(id),
      },
      data: req.body,
      include: {
        model: true,
      },
    });
    res.json(product);
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteProduct = await prisma.product.delete({
      where: {
        id: Number(id),
      },
    });
    res.json('Delete successfully');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
