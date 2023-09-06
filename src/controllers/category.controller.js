const { categoryService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const insert = async (req, res) => {
  const category = req.body;
  const { status, data } = await categoryService.insert(category);
  return res.status(mapStatusHTTP(status)).json(data);
};

const findAll = async (_req, res) => {
  const { status, data } = await categoryService.findAll();
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  insert,
  findAll,
};