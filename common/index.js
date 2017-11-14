"use strict";
const CONSTANTS = require('../constants'),
jwt = require('jsonwebtoken');

const returnResponse = (res, statusCode, message, data = null) => {
		let status = false;
		switch(statusCode){
			case 200:
				message = message || "success";
				status = true;
				break;
			case 201:
				message = message || "Data inserted successfully";
				status = true;
				break;
			case 400:
				message = message || "Invalid request";
				break;
			case 401:
				message = message || "Unauthorized request";
				break;
			case 404:
				message = message || "No data found";
				break;
			case 500:
				message = message || "Internal server error";
				break;
		}

		res.status(statusCode).send({
            success: status,
            message: message,
            data: data
        });

};

const handleError = (res, err) => {
	if(err.errors){
		console.log(err.errors)
		if(err.errors.name){
			returnResponse(res, 400, err.errors.name.message);
		}else if(err.errors.email){
			returnResponse(res, 400, err.errors.email.message);
		}else if(err.errors.password){
            returnResponse(res, 400, err.errors.password.message);
        }else if(err.errors.username){
            returnResponse(res, 400, err.errors.username.message);
        }else if(err.errors.role){
            returnResponse(res, 400, err.errors.role.message);
        }else{
			returnResponse(res, 400, 'validation error');
		}
	}else{
		returnResponse(res, 400);
	}
};


const createJwt = (data = null) => {
	return jwt.sign(data, CONSTANTS.JWTUSERSECRETKEY,{
		expiresIn : 4000
	});
};


const checkAuth = (req, res, next, whom) => {
	jwt.verify(req.token, CONSTANTS.JWTUSERSECRETKEY, (err, decoded) => {
		if(err || (whom.indexOf(decoded.role) === -1) ){
			return returnResponse(res, 401);
		}
		next(decoded);
	})
}


module.exports = {
	returnResponse: returnResponse,
	handleError: handleError,
	createJwt : createJwt,
	checkAuth : checkAuth
}