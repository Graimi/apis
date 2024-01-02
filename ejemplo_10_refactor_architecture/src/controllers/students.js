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
const getAllStudents = (req, res, next) => {
  try {
    const { filter } = req.params;

    if (filter) {
      const filteredStudents = students.filter((student) => {
        return student.name.toUpperCase() === filter.toUpperCase();
      });
      res.status(200).json({ data: filteredStudents });
    } else {
      res.status(200).json({ data: students });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
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
const createStudents = (req, res, next) => {
  const newStudent = { id: students.length + 1, name: req.body.name };

  students.push(newStudent);

  res.status(201).json({ data: newStudent });
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
