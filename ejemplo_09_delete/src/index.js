const express = require('express');

const app = express();
// Para que pueda usar un req Body
app.use(express.json());

// Creamos el soporte para peticiones tipo GET, POST, PUT, PATCH, DELETE
const router = express.Router();

// Fake database
let students = [
  {
    id: 1,
    name: 'Jaime',
  },
  {
    id: 2,
    name: 'Alberto',
  },
  {
    id: 3,
    name: 'Cristian',
  },
];

// http://localhost:${PORT}/api/students GET
router.get('/students', (req, res, next) => {
  res.status(200).json({ data: students });
});

// // http://localhost:${PORT}/api/student/id PUT
// router.put('/students/:id', (req, res, next) => {
//   const { id } = req.params;

//   // En un servidor profesional, aquí deberían haber muchos supuestos para lanzar correctamente la información

//   // Simulo la actualización en DB
//   students = students.map((student) => {
//     if (student.id.toString() === id) {
//       return {
//         ...student,
//         name: req.body.name,
//       };
//     } else {
//       return students;
//     }
//   });

//   // Simulo la búsqueda del elemento en DB actualizado
//   const updatedStudent = students.find(
//     (student) => student.id.toString() === id
//   );
//   res.status(200).json({ data: updatedStudent });
// });

router.delete('/students/:id', (req, res, next) => {
  const { id } = req.params;

  students = students.filter((student) => {
    return student.id.toString() !== id;
  });

  res.status(200).json({ data: 'Ok' });
});

// Middleware de rutas en /api: http://localhost:${PORT}/api
app.use('/api', router);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Aplicación corriendo en el puerto http://localhost:${PORT}`);
});
