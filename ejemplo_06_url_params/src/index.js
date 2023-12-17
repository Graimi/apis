const express = require('express');

const app = express();

// Creamos el soporte para peticiones tipo GET, POST, PUT, PATCH, DELETE
const router = express.Router();

// http://localhost:${PORT}/api/upper?name=jaime GET
router.get('/upper', (req, res) => {
  try {
    const { name } = req.query;
    const upperName = name.toUpperCase();
    res.status(200).json({ data: `Te llamas ${upperName}` });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Fake database
const students = [
  {
    name: 'Jaime',
  },
  {
    name: 'Alberto',
  },
  {
    name: 'Cristian',
  },
];

// // Funcionalidad con SEARCH QUERY PARAMS
// // Es más complicado de documentar, usar solo para casos específicos
// // http://localhost:${PORT}/api/students GET
// router.get('/students', (req, res, next) => {
//     try {
//       const { filter } = req.query;

//       if (filter) {
//         const filteredStudents = students.filter((student) => {
//           return student.name.toUpperCase() === filter.toUpperCase();
//         });
//         res.status(200).json({ data: filteredStudents });
//       } else {
//         res.status(200).json({ data: students });
//       }
//     } catch (error) {
//       res.status(500).json({ error: error });
//     }
//   });

// Misma funcionalidad con url params
// http://localhost:${PORT}/api/students GET
router.get('/students', (req, res, next) => {
  res.status(200).json({ data: students });
});

// http://localhost:${PORT}/api/students/name GET
router.get('/students/:filter', (req, res, next) => {
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
});

// Middleware de rutas en /api: http://localhost:${PORT}/api
app.use('/api', router);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Aplicación corriendo en el puerto http://localhost:${PORT}`);
});
