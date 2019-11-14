/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
const mongoose=require('mongoose');
const Joi=require('Joi');

const servicingDetailsSchema=new mongoose.Schema({
  servicingDetailsId: Number,
  servicingRequestsId: Number,
  employeeID: Number,
  servicePerformedId: Number,
  serviceStartTime: Date,
  serviceCompletionTime: Date,
});

const servicingDetails=mongoose.model('PerformedServiceDetails', servicingDetailsSchema);

function validationServiceDetails(serDetails) {
  const schema={
    servicingDetailsId: Joi.number().required(),
    employeeID: Joi.number().required(),
    servicingRequestsId: Joi.number().required(),
    servicePerformedId: Joi.number().required(),
    serviceStartTime: Joi.date().required(),
    serviceCompletionTime: Joi.date().required(),
  };
  return Joi.validate(serDetails, schema);
}


module.exports.servicingDetails = servicingDetails;
module.exports.validationServiceDetails=validationServiceDetails;
