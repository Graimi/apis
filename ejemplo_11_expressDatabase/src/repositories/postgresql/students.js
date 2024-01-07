const { query } = require('../../config/db');

const getAllStudentsFromDBPostgre = async (filter) => {
  const { rows: students } = await (filter
    ? query('SELECT * FROM students WHERE name LIKE $1 OR name LIKE $2 OR name LIKE $3', [`%${filter}%`, `${filter}`, `%${filter}%`])
    : query('SELECT * FROM students'));
  return students;
};

const getStudentByIdFromDBPostgre = async (id) => {
  const { rows } = await query('SELECT * FROM students WHERE id = $1', [id]);
  return rows[0];
};

const createStudentInDBPostgre = async (payload) => {
  const { rows } = await query(
    'INSERT INTO students(name) VALUES($1) RETURNING *',
    payload
  );
  return rows[0];
};

const updateStudentInDBPostgre = async (id, payload) => {
  const { rows } = await query(
    'UPDATE students SET name = $1 WHERE id = $2 RETURNING *',
    [payload, id]
  );
  return rows[0];
};

const deleteStudentInDBPostgre = async (id) => {
  await query('DELETE FROM students WHERE id = $1', [id]);
};

module.exports = {
  getAllStudentsFromDBPostgre,
  getStudentByIdFromDBPostgre,
  createStudentInDBPostgre,
  updateStudentInDBPostgre,
  deleteStudentInDBPostgre,
};
