const jwt = require('jsonwebtoken');

const generateToken = ({ id, email }) => {
  const payload = {
    sub: id,
    email,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '7d',
  });

  return token;
};

module.exports = {
  generateToken,
};