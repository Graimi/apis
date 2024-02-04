// MongoDB
const mongoose = require('mongoose');

mongoose.set('strict', false);
mongoose.set('strictQuery', false);
mongoose.set('strictPopulate', false);

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log('Conectado a MongoDB');
});

// Ejemplo de query para mongoose:
// const students = await Student.find().lean()
// res.status(200).json({data: students});
