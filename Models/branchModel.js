const mongoose = require('mongoose');

const branchSchema = new mongoose.Schema({
  Branch: {
    type: String,
    required: [true, 'A branch must have a name'],
    trim: true,
    maxlength: [10, 'The maximum number of 10 characters'],
    minlength: [3, 'The minimum length of 3 characters'],
  },
  HOB: {
    type: String,
    required: [true, 'A branch must have HOD'],
    trim: true,
    maxlength: [40, 'The maximum number of 40 characters'],
    minlength: [10, 'The minimum length of10 characters'],
  },
  Location: {
    type: String,
    required: [true, 'A branch must have a specific branch location'],
    trim: true,
    maxlength: [100, 'The maximum number of 100 characters'],
    minlength: [5, 'The minimum length of 50 characters'],
  },
});

const Branch = mongoose.model('Branch', branchSchema);

module.exports = Branch;
