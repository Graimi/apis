const express = require('express');
var jwt = require('jsonwebtoken');
const { hasValidAuthJwt } = require('../middlewares/authenticated');
const { signToken } = require('../config/jwt');

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

module.exports = router;
