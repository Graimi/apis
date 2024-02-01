var jwt = require('jsonwebtoken');

// Token secreto del servidor
const TOKEN_SECRET = 'supersecret_123456?!';

const signToken = (payload) => {
  const token = jwt.sign(payload, TOKEN_SECRET);
  return token;
};

const verifyToken = (token) => {
  const payload = jwt.verify(token, TOKEN_SECRET);
  return payload;
};

module.exports = {
  signToken,
  verifyToken,
};
