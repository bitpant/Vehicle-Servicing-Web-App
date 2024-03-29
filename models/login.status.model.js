const mongoose = require('mongoose');
// LoginStatus Schema
const LoginStatusSchema = new mongoose.Schema(
    {
      LoginStatusId: Number,
      UserName: String,
      LogInFrom: String,
      DateTime: String,
      IPAddress: String,
    },
    {timestamps: true}
);

module.exports.LoginStatus = mongoose.model('LoginStatus', LoginStatusSchema);

