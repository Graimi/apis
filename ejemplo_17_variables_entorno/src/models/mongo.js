const mongoose = require('mongoose');

const emptySchema = new mongoose.Schema({});

const Student = mongoose.model('Student', emptySchema);
const User = mongoose.model('User', emptySchema);

module.exports = { Student, User };
