const express = require('express');
const studentRouter = require('./students');
const petRouter = require('./pets');

const router = express.Router();

router.use('/students', studentRouter);
router.use('/pets', petRouter);

module.exports = router;
