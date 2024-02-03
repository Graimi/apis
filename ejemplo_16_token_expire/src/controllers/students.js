// const { query } = require('express');
const { Student } = require('../models/mongo');
const {
  getAllStudentsFromDB,
  getStudentByIdFromDB,
  createStudentInDB,
  updateStudentInDB,
  deleteStudentInDB,
} = require('../repositories/mongo/students');

// http://localhost:${PORT}/api/students/name GET
const getAllStudents = async (req, res, next) => {
  const { filter } = req.query;

  const students = await getAllStudentsFromDB(filter);
  res.status(200).json({ data: students });
};

// Misma funcionalidad pero con URL params
const getStudentsById = async (req, res, next) => {
  const { id } = req.params;
  const student = await getStudentByIdFromDB(id);
  res.status(200).json({ data: student });
};

// Creamos un estudiante con POST con el siguiente endpoint
// http://localhost:${PORT}/api/student POST
const createStudents = async (req, res, next) => {
  const newStudent = await createStudentInDB({ name: req.body.name });
  res.status(201).json({ data: newStudent });
};

// http://localhost:${PORT}/api/student/id PUT
const updateStudentById = async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  const student = await updateStudentInDB(id, { name });
  res.status(200).json({ data: student });
};

const deleteStudent = async (req, res, next) => {
  s;
  const { id } = req.params;
  await deleteStudentInDB(id);
  res.status(200).json({ data: 'OK' });
};

module.exports = {
  getAllStudents,
  getStudentsById,
  createStudents,
  updateStudentById,
  deleteStudent,
};
