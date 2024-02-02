const express = require('express');
var jwt = require('jsonwebtoken');
const { hasValidAuthJwt } = require('../middlewares/authenticated');
const { signToken } = require('../config/jwt');
const { hashPassword } = require('../config/password');
const mongo = require('../repositories/mongo/users');

const router = express.Router();

// Con este endpoint y el siguiente middleware compruebo si el token
// declarado en la url (para este ejemplo) es correcto
router.get('/authenticated', hasValidAuthJwt, (req, res) => {
  res.status(200).json({ data: 'Is authenticated' });
});

router.post('/login', (req, res) => {
  // Se invoca a la librería con la funcion firma
  const token = signToken({ id: '1234' });
  res.status(200).json({ data: token });
});

router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const hash = await hashPassword(password);

    const newUser = await mongo.createUserInDB({ email, password: hash });
    res.status(201).json({ data: newUser });
    
  } catch (err) {
    console.log('>>> Error creating user: ', err);
    res.status(400).json({ data: 'Error registering user' });
  }
});

module.exports = router;
