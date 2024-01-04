const express = require('express');
const mainRouter = require('./routes');

const app = express();
// Para que pueda usar un req Body
app.use(express.json());

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
