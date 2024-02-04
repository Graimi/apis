const express = require('express');
const {
  getAllStudents,
  getStudentsById,
  createStudents,
  updateStudentById,
  deleteStudent,
} = require('../controllers/students');
const { isAuthenticated } = require('../middlewares/authenticated');

const router = express.Router();

router.get('/', getAllStudents);
router.get('/:id', getStudentsById);
// Ejemplo token para una acción específica
// htpp://localhost:3001/api/students?token= POST
router.post('/', isAuthenticated, createStudents);
router.put('/:id', updateStudentById);
router.delete('/:id', deleteStudent);

module.exports = router;
