// Lo primero de todo el código para precargar las variables de entorno
require('dotenv').config();
// Importamos mongoose a partir del doc db
require('./config/db');
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const mainRouter = require('./routes');

const app = express();

// Se puede poner una web para que solo se pueda acceder al servidor desde esa web
// Ver ej en web de la librería
app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, true);
    },
  })
);

// Aplicamos el código para el límite de solicitudes al servidor
const limiter = rateLimit({
  //  windowMs tiene un tiempo de duración para resetear los intentos fallidos
  windowMs: 15 * 60 * 1000, // 15 minutos
  // Límite de solicitudes al servidor por IP
  limit: 100,
  // Establecemos si queremos que se de info de los límites en los headers
  standardHeaders: false,
  legacyHeaders: false,
});
app.use(limiter);

// Para que pueda usar un req Body
// Establecemos un límite para no saturar el servidor
app.use(express.json({ limit: '1mb' }));

// Formatear correctamente la información que nos llega
app.use(express.urlencoded({ limit: '1mb', extended: true }));

// Especificamos que headers se pueden usar y que tipo de respuesta se puede poner
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Methods', 'Content-Type');
  next();
});

// Configuramos para que no se vea el siguiente header específico y no se vea información sensible
app.disable('x-powered-by')

// Middleware de rutas en /api: http://localhost:${PORT}/api
app.use('/api', mainRouter);

// Controlador de rutas no encontradas
app.use('*', (req, res, next) => {
  res.status(404).json({ data: 'Not found' });
});

// Controlador de errores generales del servidor
// error solo se usa aquí
app.use((error, req, res, next) => {
  res.status(500).json({ data: 'Internal Server Error' });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Aplicación corriendo en el puerto http://localhost:${PORT}`);
});
