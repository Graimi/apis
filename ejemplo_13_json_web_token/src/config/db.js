// MongoDB
const mongoose = require('mongoose');

mongoose.set('strict', false);
mongoose.set('strictQuery', false);
mongoose.set('strictPopulate', false);

mongoose.connect('mongodb://127.0.0.1:27017/express-learning-01');

// Ejemplo de query para mongoose:
// const students = await Student.find().lean()
// res.status(200).json({data: students});

// ////////////////////////////////////////////////
// // PostgreSQL - Recomendado: https://node-postgres.com/guides/project-structure
// const pg = require('pg');

// const pool = new pg.Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'express learning-01',
//   password: 'postgres',
//   port: 5432,
// });

// const query = (text, params) => pool.query(text, params);

// module.exports = { query };

// // Ejemplo de query para pg:
// const { query } = require('......./db');
// const studentsData = await query('SELECT * FROM students');
// res.status(200).json({ data: students });
