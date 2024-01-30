const AUTH_TOKEN = 'MY_SECRET_TOKEN';

const isAuthenticated = (req, res, next) => {
  const { token } = req.query;
  if (token === AUTH_TOKEN) {
    next();
    return;
  } else {
    res.status(401).json({ data: 'Wrong token authentication' });
  }
};

module.exports = { isAuthenticated };
