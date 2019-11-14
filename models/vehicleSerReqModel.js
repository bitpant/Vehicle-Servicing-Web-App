/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
const mongoose=require('mongoose');
const Joi=require('Joi');

const servicingRequestSchema=new mongoose.Schema({
  servicingRequestsId: Number,
  vehicleCategory: Number,
  vehicleName: String,
  vehicleModel: String,
  vehicleBrand: String,
  vehicleRegistrationNumber: String,
  vehicleComplaint: String,
  vehicleDeliveryType: Number,
  vehiclePickupAddress: String,
});

const servicingRequest=mongoose.model('ServiceRequest', servicingRequestSchema);

function validationServiceRequest(serReq) {
  const schema={
    servicingRequestsId: Joi.number().required(),
    vehicleCategory: Joi.number().required(),
    vehicleName: Joi.string().required(),
    vehicleModel: Joi.string().required(),
    vehicleBrand: Joi.string().required(),
    vehicleRegistrationNumber: Joi.string().required(),
    vehicleComplaint: Joi.string().required(),
    vehicleDeliveryType: Joi.number().required(),
    vehiclePickupAddress: Joi.string(),
  };
  return Joi.validate(serReq, schema);
}


module.exports.servicingRequest = servicingRequest;
module.exports.validationServiceRequest=validationServiceRequest;
