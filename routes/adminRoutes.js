const adminServices = require('../services/adminServices');

module.exports = function(app){

app.post('/api/admin/videos',adminServices.addVideo);
app.put('/api/admin/videos/:_id',adminServices.updateVideo);
app.delete('/api/admin/videos/:_id',adminServices.deleteVideo);

}
