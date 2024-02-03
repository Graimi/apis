const express = require('express');
var jwt = require('jsonwebtoken');
const { hasValidAuthJwt } = require('../middlewares/authenticated');

const { loginUser, registerUser, getUser } = require('../controllers/users');

const router = express.Router();

// Con este endpoint y el siguiente middleware compruebo si el token
// declarado en la url (para este ejemplo) es correcto
router.get('/', hasValidAuthJwt, getUser);

router.post('/login', loginUser);

router.post('/register', registerUser);

module.exports = router;


// {
//   "data": {
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YmQyOWEyMzkxZGRlYTdhY2EzMzkxOCIsImlhdCI6MTcwNjk1NTUyN30.UF126chdwS2kCYe00f5Myq_WJW_rJl4YxBivQLSR1RM",
//     "user": {
//       "_id": "65bd29a2391ddea7aca33918",
//       "email": "jaimefloreslujan2@gmail.com",
//       "__v": 0
//     }
//   }
// }