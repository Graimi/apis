const express = require('express');
const {
  getAllStudents,
  getStudentsById,
  createStudents,
  updateStudentById,
  deleteStudent,
} = require('../controllers/students');

const router = express.Router();

router.get('/', getAllStudents);
router.get('/:id', getStudentsById);
router.post('/', createStudents);
router.put('/:id', updateStudentById);
router.delete('/:id', deleteStudent);

module.exports = router;
