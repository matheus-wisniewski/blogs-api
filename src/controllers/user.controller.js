const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const insert = async (req, res) => {
  const newUser = req.body;
  const { status, data } = await userService.insert(newUser);
  return res.status(mapStatusHTTP(status)).json(data);
};

const findAll = async (_req, res) => {
  const { status, data } = await userService.findAll();
  return res.status(mapStatusHTTP(status)).json(data);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await userService.findById(id);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  insert,
  findAll,
  findById,
};