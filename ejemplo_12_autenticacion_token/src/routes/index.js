const express = require('express');
const studentRouter = require('./students');
const petRouter = require('./pets');
const { isAuthenticated } = require('../middlewares/authenticated');

const router = express.Router();

// Si añadimos aquí el token, pediía la contraseña para cualquier acción dentro de students
router.use('/students', isAuthenticated, studentRouter);
router.use('/pets', petRouter);

module.exports = router;
