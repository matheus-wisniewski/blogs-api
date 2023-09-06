const { User } = require('../models');
const { generateToken } = require('../utils/auth');
const { validateNewUser } = require('../utils/userSchema');

const insert = async (newUser) => {
  const { email } = newUser;
  const checkError = validateNewUser(newUser);
  if (checkError) return { status: checkError.status, data: { message: checkError.message } };

  const verifyEmail = await User.findOne({ where: { email } });
  if (verifyEmail) return { status: 'CONFLICT', data: { message: 'User already registered' } };

  const createUser = await User.create(newUser);
  const token = generateToken(createUser);
  return { status: 'CREATED', data: { token } };
};

const findAll = async () => {
  const allUsers = await User.findAll({ attributes: { exclude: ['password'] } });
  return { status: 'SUCCESSFUL', data: allUsers };
};

const findById = async (id) => {
  const oneUser = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!oneUser) return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };
  return { status: 'SUCCESSFUL', data: oneUser };
};

module.exports = {
  insert,
  findAll,
  findById,
};