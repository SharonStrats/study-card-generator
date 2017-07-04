var express = require('express');
var app = express();
var mongoose = require('mongoose');
var db = mongoose.connection;
var config = require('./config');
var setupController = require('./controllers/setupController');
var api = require('./controllers/api');
var path = require('path');
var bodyParser = require("body-parser");
var port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
db.on('error', console.error.bind(console, 'connection error:'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set ('view engine', 'ejs');


app.use('/assets', express.static(__dirname + '/public'));
app.use('/api', api)
app.use('/', express.static(__dirname + '/dist'));

setupController(app);

app.listen(port, () => {
    console.log('server running on localhost:'+port)
});