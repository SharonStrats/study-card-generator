var express = require('express');
var app = express();
var mongoose = require('mongoose');
var db = mongoose.connection;
var config = require('./config');
var setupController = require('./controllers/setupController');
var api = require('./controllers/api');
var path = require('path');
var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));
app.use('/api', api)
app.use('/', express.static(__dirname + '/dist'));

app.set ('view engine', 'ejs');


setupController(app);



app.listen(port, () => {
    console.log('server running on localhost:'+port)
});