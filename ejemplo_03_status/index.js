const express = require('express');

const app = express();

// Creamos el soporte para peticiones tipo GET, POST, PUT, PATCH, DELETE
const router = express.Router();

// Middleware de rutas en /api: http://localhost:${PORT}/api
app.use('/api', router);

// Envío al cliente lo que considere al entrar en la página
router.get('/ping', (req, res, next) => {
  res.status(200).send('Pong!');
});

// Envío al cliente lo que ha creado
router.get('/ping', (req, res, next) => {
  res.status(201).json({});
});

// No envío nada al cliente
router.get('/ping', (req, res, next) => {
  res.status(204);
});
