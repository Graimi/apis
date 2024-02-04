const bcrypt = require('bcrypt');

// Conjunto de saltos que deseamos utilizar para encriptar las contraseñas.
// A más salts, más dificil que te la obtengan pero más CPU consume
const saltRounds = 10;

const hashPassword = async (password) => {
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
};

const verifyPassword = async (password, hash) => {
  const isValid = await bcrypt.compare(password, hash);
  return isValid;
};

module.exports = { hashPassword, verifyPassword };
