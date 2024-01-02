const express = require('express');
const mainRouter = require('./routes')

const app = express();
// Para que pueda usar un req Body
app.use(express.json());

// Middleware de rutas en /api: http://localhost:${PORT}/api
app.use('/api', mainRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Aplicación corriendo en el puerto http://localhost:${PORT}`);
});
