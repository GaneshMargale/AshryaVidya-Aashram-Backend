const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, 'A student must have a name'],
    trim: true,
    maxlength: [40, 'The maximum number of 40 characters'],
    minlength: [3, 'The minimum length of 3 characters'],
  },
  Age: {
    type: Number,
    required: [true, 'A student must have a age'],
  },
  Gender: {
    type: String,
    required: [true, 'A student must have a gender'],
    enum: {
      values: ['Male', 'Female'],
      message: 'The gender must be male or female',
    },
  },
  DOB: {
    type: Date,
    required: [true, 'A student must have a date'],
    default: Date.now(),
  },
  Birth_place: {
    type: String,
    required: [true, 'A student must have a birth_place'],
  },
  Joined: {
    type: Date,
    required: [true, 'A student must have a join date'],
    default: Date.now(),
  },
  Aadhar: {
    type: String,
    required: [true, 'A student must have a aadhar'],
  },
  Standard: {
    type: Number,
    required: [true, 'A student must have a standard'],
    min: [1, 'A student standard ranges from 1 to 10'],
    max: [10, 'A student standard ranges from 1 to 10'],
  },
  Branch: {
    type: String,
    required: [true, 'A student must have a specific branch'],
    trim: true,
    maxlength: [10, 'The maximum number of 10 characters'],
    minlength: [3, 'The minimum length of 3 characters'],
  },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
