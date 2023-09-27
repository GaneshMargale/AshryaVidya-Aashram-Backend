const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Student = require('./../../studentModel');
const Branch = require('./../../branchModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connection Successful');
  });

// const students = JSON.parse(
//   fs.readFileSync(`${__dirname}/students.json`, 'utf-8')
// );

const branch = JSON.parse(fs.readFileSync(`${__dirname}/branch.json`, 'utf-8'));

const importData = async () => {
  try {
    await Branch.create(branch);
    console.log('Data Loaded');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

const deleteStudent = async () => {
  try {
    await Branch.deleteMany();
    console.log('Delete Successful');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteStudent();
}
