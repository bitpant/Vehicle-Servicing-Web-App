/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
const mongoose= require('mongoose');
const Joi = require('joi');
const roleSchema =new mongoose.Schema({
  RoleId: Number,
  RoleName: String,
  Role_description: String,
});


const Roles= mongoose.model('Role', roleSchema);


function validateRole(role) {
  const schema ={
    RoleId: Joi.number().required(),
    RoleName: Joi.string().valid(['Customer', 'Manager', 'Supervisor', 'Maintenance Engineer']).
        required(),
    Role_description: Joi.string().required(),
  };

  return Joi.validate(role, schema);
}


module.exports.Roles = Roles;
module.exports.validateRole = validateRole;
