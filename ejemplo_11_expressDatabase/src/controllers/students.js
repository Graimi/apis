// const { query } = require('express');
const { Student } = require('../models/mongo');
const {
  getAllStudentsFromDB,
  getStudentByIdFromDB,
  createStudentInDB,
  updateStudentInDB,
  deleteStudentInDB,
} = require('../repositories/mongo/students');
const {
  getAllStudentsFromDBPostgre,
  getStudentByIdFromDBPostgre,
  createStudentInDBPostgre,
  updateStudentInDBPostgre,
  deleteStudentInDBPostgre,
} = require('../repositories/postgresql/students');

// http://localhost:${PORT}/api/students/name GET
const getAllStudents = async (req, res, next) => {
  const { filter } = req.query;

  // Con Mongo
  // const students = await getAllStudentsFromDB(filter);
  // res.status(200).json({ data: students });

  // Con Postgree
  const students = await getAllStudentsFromDBPostgre(filter);
  res.status(200).json({ data: students });
};

// Misma funcionalidad pero con URL params
const getStudentsById = async (req, res, next) => {
  const { id } = req.params;

  // Con Mongo
  const student = await getStudentByIdFromDB(id);
  res.status(200).json({ data: student });

  // Con Postgree
  // const student = await getStudentByIdFromDBPostgre(id);
  // res.status(200).json({ data: student });
};

// Creamos un estudiante con POST con el siguiente endpoint
// http://localhost:${PORT}/api/student POST
const createStudents = async (req, res, next) => {
  
  // Mongo
  const newStudent = await createStudentInDB({ name: req.body.name });
  res.status(201).json({ data: newStudent });

  // Postgree
  // const newStudent = await createStudentInDBPostgre([req.body.name]);
  // res.status(201).json({ data: newStudent });
};

// http://localhost:${PORT}/api/student/id PUT
const updateStudentById = async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;

  // Mongo
  const student = await updateStudentInDB(id, { name });
  res.status(200).json({ data: student });

  // Con Postgree
  // const student = await updateStudentInDBPostgre([name, id]);
  // res.status(200).json({ data: student });
};

const deleteStudent = async (req, res, next) => {s
  const { id } = req.params;

  // Mongo
  await deleteStudentInDB(id);
  res.status(200).json({ data: 'OK' });

  // Con Postgree
  // await deleteStudentInDBPostgre(id);
  // res.status(200).json({ data: 'OK' });
};

module.exports = {
  getAllStudents,
  getStudentsById,
  createStudents,
  updateStudentById,
  deleteStudent,
};
