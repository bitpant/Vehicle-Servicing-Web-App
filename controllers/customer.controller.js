/* eslint-disable max-len */
// const mongoose = require('mongoose');
const express = require('express');
const jwt = require('jsonwebtoken');

const {Customer, validateCustomer} = require('../models/customerModel');
const {LoginStatus} = require('../models/login.status.model');
// const Cus = mongoose.model('CustomerDetails');

const app = express();
const jwtSettings = {
  jwtSecret: 'sbibobbompnb37645sbi28yesbi',
};
app.set('jwtSecret', jwtSettings['jwtSecret']);

const CustomerController = {};

// Create Customer
CustomerController.CreateCustomer = function(request, response) {
  const customer = request.body.customer;
  // const tokenRecived = request.headers.authorization.split(' ')[1];
  /* jwt.verify(tokenRecived, app.get('jwtSecret'), function(err, decoded) {
    if (err) {
      response.send({success: false, message: 'Token verification failed'});
    } else {*/
  /* const {error} =validateCustomer(customer);
   if (error) {
    response.status(400).send(error.details[0].message);
    return;
  }*/
  // request.decoded = decoded;

  
  Customer.create(customer, function(err, res) {
    if (!err) {
      if (res != null) {
        console.log("======Response======",res);
        response.send({
          data: res,
          statusMessage: 'Customer Created Successful',
          statusCode: 200,
        });
      } else {
        response.send({error: 'Customer Creation Failed.'});
      }
    } else {
      response.send({error: err});
    }
  });
  // }
  // });
};


// Authenticate Customer
CustomerController.AuthUser = function(request, response) {
  const customer = request.body.customer;
  // var LoggedInUserName = null;
  Customer.findOne( {'mobileNumber': customer.mobileNumber, 'password': customer.password}).exec(function(err, res) {
    console.log("======Response======",res);
    if (!err) {
      if (res != null) {
        /* const Token = jwt.sign({customer}, app.get('jwtSecret'), {
          expiresIn: 3600,
        });
        const ip =
                    request.headers['x-forwarded-for'] ||
                    (request.connection && request.connection.remoteAddress) ||
                    '';*/
        const loginstatusObject = {
          // UserName: customer.fullName.firstName,
          LogInFrom: null,
          DateTime: new Date(),
          // IPAddress: ip,
        };
        LoginStatus.create(loginstatusObject, function(err, res) {
          if (!err) {
            if (res != null) {
              response.send({
                statusCode: 200,
                authenticated: true,
                status: 'Login Successful',
                // token: Token,
              });
            }
          }
        });
      } else {
        response.send({statusCode: 404, status: 'Some Error Occured..'});
      }
    } else {
      response.send({statusCode: 404, status: 'Some Error Occured..'});
    }
  });
};

module.exports = CustomerController;
