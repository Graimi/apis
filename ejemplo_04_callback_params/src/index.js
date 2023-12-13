const express = require('express');

const app = express();

// Creamos el soporte para peticiones tipo GET, POST, PUT, PATCH, DELETE
const router = express.Router();

// Middleware de rutas en /api: http://localhost:${PORT}/api
app.use('/api', router);

// http://localhost:${PORT}/api/ping GET
router.get('/ping', (req, res, next) => {
  //   Para ver todo lo que tiene una request
  //   console.log(req);

  //   Devuelve lo que esté detrás de la ?
  //   http://localhost:${PORT}/api/ping?name=cristian // GET
  req.query; // {name: 'cristian'}

  //   Devuelve parte de la api, hay que definirlo en el router
  //   En el ejemplo dará 1
  //   http://localhost:${PORT}/api/students/1 // GET
  //   router.get('/students/:id', (req, res, next) => {
  //     res.params.id; // {id: 3}
  //   });

  //   POST PUT PATCH
  req.body; // {...}

  //   Para ver todo lo que tiene una response
  //   console.log(res);

  // Para establecer el status
  res.status(200);

  // Manda strings como documento interpretabla a HTML
  //   res.send('');

  // Esta es mejor opción, manda un json
  //   No hay un estandar, se ponen algunos ejemplos
  //   res.json({ data: {}, errors: {}});
  res.json({ data: 'Pong!' });

  //   Para saltar de un contenido a otro
  next();
  return;
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Aplicación corriendo en el puerto http://localhost:${PORT}`);
});
