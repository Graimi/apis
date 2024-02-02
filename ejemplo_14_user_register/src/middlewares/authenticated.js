var jwt = require('jsonwebtoken');
const { verifyToken } = require('../config/jwt');


// Ejemplo anterior
const AUTH_TOKEN = 'MY_SECRET_TOKEN';

// Ejemplo anterior
const isAuthenticated = (req, res, next) => {
  const { token } = req.query;
  if (token === AUTH_TOKEN) {
    next();
    return;
  } else {
    res.status(401).json({ data: 'Wrong token authentication' });
  }
};

const hasValidAuthJwt = (req, res, next) => {
  try {
    const { token } = req.query;
    verifyToken(token);
    next();
  } catch (err) {
    res.status(401).json({ data: 'No authenticated' });
  }
};

module.exports = { isAuthenticated, hasValidAuthJwt };
