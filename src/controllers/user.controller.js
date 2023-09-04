const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const insert = async (req, res) => {
  const newUser = req.body;
  const { status, data } = await userService.insert(newUser);

  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  insert,
};