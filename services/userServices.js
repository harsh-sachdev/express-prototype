"use strict";
const Video = require('../schemas/videoSchema'),
User = require('../schemas/userSchema'),
common = require('../common'),
bcrypt = require('bcryptjs'),
Request = require('request');;


module.exports = {

	//register user
	register: (req, res) => {

		//to insert data into user collection
        function insertUser(obj){
        	console.log(obj)
            User.create(obj, (err, user) => {
            	console.log('>>>>>>',err, user)
                if(err){
                    return common.handleError(res, err);
                }
                let token = common.createJwt({email:req.body.email,role:req.body.role});
                return common.returnResponse(res,201,null,{token: token, role: req.body.role});
            })
        }

		User.find({email:req.body.email}, (err, user) => {
			if(err){
				common.handleError(res, err);
			}
			else if(user.length > 0){
				common.returnResponse(res, 400, 'Email id already exist');
			}else{
				if(req.token){
					//facebook login/registration
                    Request.get({
                        url: `https://graph.facebook.com/me?fields=id,name,picture,email&access_token=${req.token}`
                    }, function(err, response, body){
                        if(JSON.parse(body).error){
                            return common.returnResponse(res, 401);
                        }
						insertUser({username:req.body.username,email:req.body.email,role:req.body.role})
                    });
				}else{
					//normal registration
					if(req.body.password && req.body.password.length > 5){
                        bcrypt.hash(req.body.password, 10, (err, hash) => {
                            if(err){
                                return common.returnResponse(res, 500);
                            }
                            insertUser({username:req.body.username,email:req.body.email,password:hash,role:req.body.role})
                        })
					}else{
                        return common.returnResponse(res, 400, 'Password should contain atleast 6 characters');
					}

				}

			} 
		})
	},

	login: function(req, res){
		User.find({email:req.body.email}, (err, user) => {
			if(err){
				common.returnResponse(res, 500);
			}else if(user.length === 0){
				common.returnResponse(res, 404);
			}else{
				if(bcrypt.compareSync(req.body.password, user[0].password)){
					const token = common.createJwt({_id:user[0]._id,email:req.body.email,role:user[0].role});
                    return common.returnResponse(res,200,null,{token: token, role: req.body.role});
				}else{
					common.returnResponse(res, 404, 'wrong password');
				}
			}
		});
	},

    //VIDEO
    //get all videos
    getVideos: (req, res) => {
        Video.find((err, videos) => {
            if(err){
                return common.handleError(res, err);
            }
            common.returnResponse(res,200,null,videos);
        });
    },

    //get Video by id
    getVideosById: (req, res) => {
        Video.findById(req.params._id, (err, video) => {
            if(err){
                return common.handleError(res, err);
            }
            common.returnResponse(res,200,null,video);
        });
    }
}