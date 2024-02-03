const { Student } = require('../../models/mongo');

const getAllStudentsFromDB = async (filter) => {
  const nameFilterOptions = {
    name: { $regex: new RegExp(filter, 'i') },
  };
  const students = await Student.find(filter ? nameFilterOptions : {});
  return students;
};

const getStudentByIdFromDB = async (id) => {
  const student = await Student.findById(id);
  return student;
};

const createStudentInDB = async (payload) => {
  const newStudent = new Student(payload);
  await newStudent.save();

  return newStudent;
};

const updateStudentInDB = async (id, payload) => {
  const student = await Student.findByIdAndUpdate(id, payload, { new: true });
  return student;
};

const deleteStudentInDB = async (id) => {
  await Student.deleteOne({ _id: id });
};

module.exports = {
  getAllStudentsFromDB,
  getStudentByIdFromDB,
  createStudentInDB,
  updateStudentInDB,
  deleteStudentInDB,
};
