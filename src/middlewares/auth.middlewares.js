const jwtToken = require('jsonwebtoken');

const authentication = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' }); 
  const token = authorization.split(' ')[1];
  try {
    jwtToken.verify(token, process.env.JWT_SECRET);
    
    next();
  } catch (e) {
    console.error(e);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = authentication;