const { postService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const findAll = async (_req, res) => {
  const { status, data } = await postService.findAll();
  res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  findAll,
};