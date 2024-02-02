const { User } = require('../../models/mongo');

// El payload será {email y password }donde password será el hash
const createUserInDB = async (payload) => {
  const user = await User.findOne({ email: payload.email });
  if (user) {
    throw new Error('User exists with the same email');
  }

  const newUser = new User(payload);
  await newUser.save();

  const { password, ...rest } = newUser.toObject();

  return rest;
};

module.exports = { createUserInDB };
