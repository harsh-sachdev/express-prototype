"use strict";
const Video = require('../schemas/videoSchema'),
common = require('../common');


module.exports = {

//VIDEO
	//add new video
	addVideo: (req, res) => {
		common.checkAuth(req, res, data => {
			req.body.user_id = data._id;
			Video.create(req.body, (err,  video) => {
				if(err){
					return common.handleError(res, err);
				}
				common.returnResponse(res,200,null,video)
			});
		},'admin');	
	},

	updateVideo: (req, res) => {
		common.checkAuth(req, res, data => {
			Video.findOneAndUpdate({_id: req.params._id}, req.body, {}, (err, video) => {
				if(err){
					return common.handleError(res, err);
				}
				common.returnResponse(res,200,null,video)
			});
		},'admin');
	},

	deleteVideo: function(req, res){
		common.checkAuth(req, res, function(data){
			Video.remove({_id : req.params._id}, (err, video) => {
				if(err){
					return common.handleError(res, err);
				}
				common.returnResponse(res,200,null,video)
			});
		},'admin');
	}
	
}
