const { signToken } = require('../config/jwt');
const mongo = require('../repositories/mongo/users');
const { hashPassword, verifyPassword } = require('../config/password');

const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hash = await hashPassword(password);

    // Creamos el usuario y declaramos en la variable password el hash de la contraseña
    const newUser = await mongo.createUserInDB({ email, password: hash });
    res.status(201).json({ data: newUser });
  } catch (err) {
    console.log('>>> Error creating user: ', err);
    res.status(400).json({ data: 'Error registering user' });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await mongo.getUserByEmailFromDB(email);
  // Comprobamos si existe el usuario
  if (!user) {
    res.status(401).json({ data: 'User does not exist' });
    return;
  }

  const isValidPassword = await verifyPassword(password, user.password);
  // Comprobamos si la contraseña es válida
  if (!isValidPassword) {
    res.status(401).json({ data: 'Incorrect email or password' });
    return;
  }

  // Se invoca a la librería con la funcion firma
  const token = signToken({ id: user._id });
  const { password: unUsedPassword, ...restUser } = user;
  res.status(200).json({ data: { token, user: restUser } });
};

const getUser = async (req, res) => {
  const { id } = req.user;
  const user = await mongo.getUserByIdFromDB(id);
  res.status(200).json({ data: user });
};

const updateUserAvatar = async (req, res, next) => {
  const { path } = req.file;
  const { id } = req.user;

  await mongo.updateUserWithAvatarInDB(id, path);

  res.status(201).json({ data: path });
};

module.exports = { loginUser, registerUser, getUser, updateUserAvatar };
