"use strict";
const userServices = require('../services/userServices');

module.exports = function(app){

app.post('/api/user/register',userServices.register);
app.post('/api/user/login',userServices.login);

app.get('/api/user/videos',userServices.getVideos);
app.get('/api/user/videos/:_id',userServices.getVideosById);



}