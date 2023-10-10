const mongoose = require('mongoose');

// Define the student schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  roll: {
    type: String,
    required: true,
  },
  reg: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
  },
});

// Create a Student model based on the schema
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
