// =====================================================================
// EXTERNAL MODULES IMPORTS
// =====================================================================
var express     = require('express'),
    path        = require('path'),
    bodyParser  = require("body-parser"),
    mongoose    = require('mongoose');

// =====================================================================
// LOCAL MODULES IMPORTS
// =====================================================================
var config          = require('./config/index'),
    setupController = require('./controllers/setupController'),
    user            = require('./controllers/userAPI'),
    apiController = require('./controllers/apiController');

// =====================================================================
// BASE SETUP
// =====================================================================
var app     = express(),
    db      = mongoose.connection,
    port    = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Mongoose Setup
mongoose.Promise = global.Promise;
mongoose.connect(config.getDbConnectionString());
setupController(app);
apiController(app);
db.on('error', console.error.bind(console, 'connection error:'));

// Assets and base route Setup
app.use('/assets', express.static(__dirname + '/public'));
app.use('/api/user', user)
app.use('/', express.static(__dirname + '/../dist'));

// Directs all other routes to Angular/frontend route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
})

// setupController(app);

app.listen(port, () => {
    console.log('server running on localhost:'+port)
});