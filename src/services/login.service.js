const { User } = require('../models');
const { generateToken } = require('../utils/auth');

const login = async (email, password) => {
  const users = await User.findOne({ where: { email } });
  
  if (!users || users.password !== password) {
    return { status: 'BAD_REQUEST', data: { message: 'Invalid fields' } };
  }

  const token = generateToken(users);
  return { status: 'SUCCESSFUL', data: { token } };
};

module.exports = {
  login,
};