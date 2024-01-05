const { query } = require('express');
const { Student } = require('../models/mongo');

// Fake database
let students = [
  {
    id: 1,
    name: 'Jaime',
  },
  {
    id: 2,
    name: 'Natalio',
  },
  {
    id: 3,
    name: 'Cristian',
  },
];

// http://localhost:${PORT}/api/students/name GET
const getAllStudents = async (req, res, next) => {
  const { filter } = req.query;

  // Con Mongo
  const nameFilterOptions = {
    name: { $regex: new RegExp(filter, 'i') },
  };
  const students = await Student.find(filter ? nameFilterOptions : {});

  res.status(200).json({ data: students });

  // Con Postgree
  // const nameQuery = filter ? 'SELECT * FROM students WHERE name LIKE %filter%' : 'SELECT * FROM students';
  // const { rows: students } = await query('SELECT * FROM students');
  // res.status(200).json({ data: students });
};

// Misma funcionalidad pero con URL params
const getStudentsById = (req, res, next) => {
  const { id } = req.params;

  const student = students.find((student) => {
    return student.id.toString() === id;
  });
  res.status(200).json({ data: student });
};

// Creamos un estudiante con POST con el siguiente endpoint
// http://localhost:${PORT}/api/student POST
const createStudents = async (req, res, next) => {
  // Mongo
  const newStudent = new Student({ name: req.body.name });
  await newStudent.save();
  res.status(201).json({ data: newStudent });

  // Postgree
//   const { rows } = await query(
//     'INSERT INTO students(name) VALUES($1) RETURNING *',
//     [req.body.name]
//   );
//   res.status(201).json({ data: newStudent });

};

// http://localhost:${PORT}/api/student/id PUT
const updateStudentById = (req, res, next) => {
  const { id } = req.params;

  // En un servidor profesional, aquí deberían haber muchos supuestos para lanzar correctamente la información

  // Simulo la actualización en DB
  students = students.map((student) => {
    if (student.id.toString() === id) {
      return {
        ...student,
        name: req.body.name,
      };
    } else {
      return students;
    }
  });

  // Simulo la búsqueda del elemento en DB actualizado
  const updatedStudent = students.find(
    (student) => student.id.toString() === id
  );

  res.status(200).json({ data: updatedStudent });
};

const deleteStudent = (req, res, next) => {
  const { id } = req.params;

  students = students.filter((student) => {
    return student.id.toString() !== id;
  });

  res.status(200).json({ data: 'Ok' });
};

module.exports = {
  getAllStudents,
  getStudentsById,
  createStudents,
  updateStudentById,
  deleteStudent,
};
