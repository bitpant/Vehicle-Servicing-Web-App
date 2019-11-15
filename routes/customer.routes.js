/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();

const CustomerController = require('../controllers/customer.controller');


// Auth Customer
router.post('/api/customerlogin', function(req, res) {
  CustomerController.AuthUser(req, res);
});

// Customer CRUD Operations

router.post('/api/createcustomer', function(req, res) {
  CustomerController.CreateCustomer(req, res);
});

/*
router.get('/api/getallcustomer', function(req, res) {
  CustomerController.GetAllCustomer(req, res);
});

router.get('/api/getcustomer/:id', function(req, res) {
  CustomerController.GetCustomerById(req, res);
});


router.get('/api/getcustomerid', function(req, res) {
  CustomerController.GetCustomerId(req, res);
});

router.get('/api/searchoperator', function(req, res) {
  CustomerController.SearchOperator(req, res);
});

router.put('/api/updateCustomer', function(req, res) {
  CustomerController.UpdateCustomer(req, res);
});

router.delete('/api/deleteCustomer/:id', function(req, res) {
  CustomerController.DeleteCustomer(req, res);
});*/

module.exports = router;
