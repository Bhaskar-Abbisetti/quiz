const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentname: String,
  password: String,
  role:String
});


const Student = mongoose.model('Student', studentSchema);

module.exports = Student;