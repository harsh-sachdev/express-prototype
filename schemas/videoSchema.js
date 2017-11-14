const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	author_name:{
		type: String,
		required: true
	},
	user_id:{
		type: String,
		required: true
	}
});

module.exports = mongoose.model('videos', videoSchema)
