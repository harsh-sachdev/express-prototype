const mongoose = require('mongoose'),
config = require('config'),
dbConfig = config.get('dbConfig');

if(dbConfig.user === "" || dbConfig.password === ""){
    mongoose.connect(`mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`, { useMongoClient: true });
}else{
    mongoose.connect(`mongodb://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`, { useMongoClient: true });
}


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'DB connection error'));

db.once('open', () => console.log('DB Connected'));

module.exports = db;