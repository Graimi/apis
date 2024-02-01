const mongoose = require('mongoose');

const emptySchema = new mongoose.Schema({});

const Student = mongoose.model('Student', emptySchema);

module.exports = { Student };
