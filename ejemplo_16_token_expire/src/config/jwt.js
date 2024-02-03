var jwt = require('jsonwebtoken');

// Token secreto del servidor
const TOKEN_SECRET = 'supersecret_123456?!';

const signToken = (payload) => {
  // Al final añadimos cuanto tarda en expirar el token
  const token = jwt.sign(payload, TOKEN_SECRET, { expiresIn: 24 * 60 * 60 });
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
