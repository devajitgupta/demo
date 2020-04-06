var express=require('express');
var bodyParser=require('body-parser');
var port=3000;
var app=express.Router();
var mongoose=require('mongoose');
var userRoutes=require('user');
mongoose.connect('mongodb://ajitgupta:ajitgupta@cluster0-shard-00-00-smarh.mongodb.net:27017,cluster0-shard-00-01-smarh.mongodb.net:27017,cluster0-shard-00-02-smarh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',{useNewUrlParser:true},function(req,res){
	console.log("database connected");
});

const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const users = require('./routes/users');
const express = require('express');
const app = express();
 
mongoose.connect('mongodb://ajitgupta:ajitgupta@cluster0-shard-00-00-smarh.mongodb.net:27017,cluster0-shard-00-01-smarh.mongodb.net:27017,cluster0-shard-00-02-smarh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority');
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));
 
app.use(express.json());
app.use('/api/users', users);
 
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));