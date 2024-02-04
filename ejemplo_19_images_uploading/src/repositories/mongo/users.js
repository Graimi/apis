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

const getUserByEmailFromDB = async (email) => {
  const user = await User.findOne({ email }).lean();
  return user;
};

const getUserByIdFromDB = async (id) => {
  const user = await User.findById(id).lean();
  const { password, ...rest } = user;

  return rest;
};

const updateUserWithAvatarInDB = async (id, path) => {
  await User.updateOne({ _id: id }, { avatar: path });
};

module.exports = { createUserInDB, getUserByEmailFromDB, getUserByIdFromDB, updateUserWithAvatarInDB };
