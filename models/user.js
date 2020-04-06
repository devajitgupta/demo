const mongoose= require('mongoose');
 var userSchema = new mongoose.Schema({
 	username:{
 		type:String,
 		required:'This field require'
 	},
 	email:{
 		type:String
 	},
 	mobile:{
 		type:String
 	},
 	password:{
 		type:String
 	}
 });

module.exports=mongoose.model('User',userSchema);

