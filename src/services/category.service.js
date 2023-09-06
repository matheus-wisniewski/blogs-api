const { Category } = require('../models');

const insert = async (category) => {
  const { name } = category;
  if (!name) return { status: 'BAD_REQUEST', data: { message: '"name" is required' } };
  const insertNewCategory = await Category.create({ name });
  return { status: 'CREATED', data: insertNewCategory };
};

const findAll = async () => {
  const categories = await Category.findAll();
  return { status: 'SUCCESSFUL', data: categories };
};

module.exports = {
  insert,
  findAll,
};