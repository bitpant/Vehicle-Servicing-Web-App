const mongoose= require('mongoose');
const Joi = require('joi');

const employeeSchema =new mongoose.Schema({
  employeeId: Number,
  fullName: {
    firstName: String,
    middleName: String,
    lastName: String,
  },
  gender: String,
  dob: Date,
  age: Number,
  address: {
    flatNumber: String,
    societyName: String,
    streetName: String,
    pincode: Number,
  },
  city: String,
  state: String,
  password: String,
  status: Number,
  mobileNumber: Number,
  registrationDate: Date,
  roleId: Number,
  createdDate: Date,
});


const Employee= mongoose.model('PersonInfo', employeeSchema);

// eslint-disable-next-line require-jsdoc
function validateEmployee(employee) {
  const schema ={
    employeeId: Joi.number(),
    fullName: Joi.object().required(),
    fullName: Joi.object().keys({
      firstName: Joi.string().max(30).required(),
      middleName: Joi.string().max(30),
      lastName: Joi.string().max(30),
    }),
    gender: Joi.string().required(),
    dob: Joi.date(),
    age: Joi.number().required(),
    pincode: Joi.number().required(),
    mobileNumber: Joi.number().required(),
    address: Joi.object().required(),
    address: Joi.object().keys({
      flatNumber: Joi.string().required(),
      societyName: Joi.string().required(),
      streetName: Joi.string().required(),
      pincode: Joi.number().required(),
    }),
    city: Joi.string().required(),
    state: Joi.string().required(),
    roleId: Joi.number().required(),
    createdDate: Joi.date(),
  };

  return Joi.validate(Employee, schema);
}

module.exports.Employee = Employee;
module.exports.validateEmployee = validateEmployee;
