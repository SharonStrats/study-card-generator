// =====================================================================
// EXTERNAL MODULES IMPORTS
// =====================================================================
var express     = require('express'),
    path        = require('path'),
    bodyParser  = require("body-parser"),
    mongoose    = require('mongoose'),
    passport    = require('passport');

// =====================================================================
// LOCAL MODULES IMPORTS
// =====================================================================
var config          = require('./config'),
    setupController = require('./controllers/setupController'),
    user            = require('./controllers/user.controller'),
    passportConfig  = require('./config/authentication');

// =====================================================================
// BASE SETUP
// =====================================================================
var app      = express(),
    db       = mongoose.connection,
    dist_dir = __dirname + '/../dist',
    port     = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// =====================================================================
// DATABASE SETUP
// =====================================================================
mongoose.Promise = global.Promise;
mongoose.connect(config.getDbConnectionString())
db.on('error', console.error.bind(console, 'connection error:'));

// =====================================================================
// ASSETS & ROUTES SETUP
// =====================================================================
app.use(passport.initialize());
app.use('/assets', express.static(__dirname + '/public'));
app.use('/api/user', user)
app.use('/', express.static(dist_dir));

// Directs all other routes to Angular/frontend route
app.get('*', function (req, res){
    res.sendFile(path.join(dist_dir + '/index.html'))
})

// setupController(app);

app.listen(port, function () {
    console.log('server running on localhost:'+ port)
});