const express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
bearerToken = require('express-bearer-token'),
path = require('path'),
config = require('config'),
appConfig = config.get('appConfig'),
cors = require('cors'),
helmet = require('helmet'),
morgan = require('morgan'),
app = express();
app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));
app.use(bearerToken());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

require('./config/db.js');
require('./routes')(app);
require('./swagger')(app);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.send(`<h1>Welcome to ${appConfig.appName} Backend Server </h1>`);
});

app.listen(appConfig.port, () => console.log(`Cover Singers ${appConfig.env} server is up on port ${appConfig.port}`));


