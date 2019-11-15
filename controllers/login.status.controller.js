const mongoose = require('mongoose');
// const LoginStatusModel = require('../models/login.status.model');
const LoginStatus = mongoose.model('LoginStatus');

const LoginStatusController = {};


// Create LogInStatus
LoginStatusController.CreateLogInStatus = function(request, response) {
  const user = {
    UserName: request.body.UserName,
    PassWord: request.body.PassWord,
  };
  LoginStatus.create(user);
};


module.exports = LoginStatusController;
