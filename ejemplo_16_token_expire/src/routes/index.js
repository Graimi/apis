const express = require('express');
const studentRouter = require('./students');
const petRouter = require('./pets');
const { isAuthenticated } = require('../middlewares/authenticated');
const authRouter = require('./auth');

const router = express.Router();

router.use('/students', isAuthenticated, studentRouter);
router.use('/pets', petRouter);
router.use('/auth', authRouter);

module.exports = router;
