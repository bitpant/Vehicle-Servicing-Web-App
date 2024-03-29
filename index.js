const express= require('express');
const app=express();
const morgan=require('morgan');
const mongoose=require('mongoose');
const config=require('config');
const port= process.env.PORT || 3030;

mongoose.connect('mongodb://localhost/Vehicle_Service_Managemenet')
    .then(()=>console.log('Connected to MongoDB...'))
    .catch(()=>console.log('Error in Connecting to Mongo DB'));
app.use(function(req, response, next) {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json());
// Configration
console.log(`app:${app.get('env')}`);
console.log(`Appliacation Name:${config.get('name')}`);

if (app.get('env')==='development') {
  app.use(morgan('tiny'));
  console.log(`Morgan enabled...`);
}

const CustomerRoutes=require('./routes/customer.routes.js');

app.use([CustomerRoutes]);


app.listen(port, ()=>console.log(`Listening on Port ${port}.....`));
