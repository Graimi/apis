const express = require('express');
var jwt = require('jsonwebtoken');
const { hasValidAuthJwt } = require('../middlewares/authenticated');
const {
  loginUser,
  registerUser,
  getUser,
  updateUserAvatar,
} = require('../controllers/users');
const uploadFile = require('../middlewares/uploadFile');

const router = express.Router();

// Con este endpoint y el siguiente middleware compruebo si el token
// declarado en la url (para este ejemplo) es correcto
router.get('/', hasValidAuthJwt, getUser);
router.post('/login', loginUser);
router.post('/register', registerUser);
router.post(
  '/upload-avatar',
  hasValidAuthJwt,
  uploadFile.single('avatar'),
  updateUserAvatar
);

module.exports = router;
