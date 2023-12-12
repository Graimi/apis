const express = require('express');

const app = express();

// Creamos el soporte para peticiones tipo GET, POST, PUT, PATCH, DELETE
const router = express.Router();

// Middleware de rutas en /api: http://localhost:${PORT}/api
app.use('/api', router);

// http://localhost:${PORT}/api/ping GET
router.get('/ping', (req, res, next) => {
  res.status(200).send('Pong!');
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Aplicación corriendo en el puerto http://localhost:${PORT}`);
});
