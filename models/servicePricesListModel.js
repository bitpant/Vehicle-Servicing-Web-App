/* eslint-disable require-jsdoc */
const mongoose= require('mongoose');
const Joi = require('joi');
const servicePriceSchema=new mongoose.Schema({
  servicePriceId: Number,
  vehicleCategory: Number,
  serviceName: String,
  servicePrice: Number,
});


const ServicePriceList= mongoose.model('ServicePriceList', servicePriceSchema);

function validationServicePrice(priceList) {
  const schema={
    servicePriceId: Joi.number().required(),
    vehicleCategory: Joi.number().required(),
    serviceName: Joi.string().required(),
    servicePrice: Joi.number().required(),
  };
  return Joi.validate(priceList, schema);
}


module.exports.ServicePriceList = ServicePriceList;
module.exports.validationServicePrice=validationServicePrice;
