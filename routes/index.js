'use strict';
module.exports = function(app){
	require('./adminRoutes')(app);
	require('./userRoutes')(app);
}