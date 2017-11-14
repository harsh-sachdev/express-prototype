"use strict";
const mongoose = require('mongoose'),
SV = require('./validator');

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        validate: SV.usernameValidator
    },
	email:{
		type: String,
		required: true, 
		validate: SV.emailValidator
	},
	password:{
		type: String
	},
	role:{
    	type: String,
		required: true,
		validate: SV.roleValidator
	}
});


module.exports = mongoose.model('users', userSchema)