var express = require('express');
var mongoose = require('mongoose');
var config = require('../config');
var db = mongoose.connection;

var CardGen = require('../models/cardGenModel');
var bodyParser = require('body-parser');
var router = express.Router();

router.get('/', (req, res) => {
	mongoose.connect(config.getDbConnectionString());
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', () => {
    	console.log('we are in!');
	})
	res.send('card api works!');
})

module.exports = router;
// module.exports = function(app) {
// 	//end-points for creating and requesting data
// 	app.use(bodyParser.json());
// 	app.use(bodyParser.urlencoded({ extended: true}));

// 	app.get('/api/cards/:uname', function(req,res) {

// 		CardGen.find({username: req.params.uname},
// 			function(err, cards) {
// 				if (err) throw err;
// 				res.send(cards);
// 			});
// 	});

// 	app.get('/api/card/:id', function(req,res) {

// 		CardGen.findById({_id: req.params.id}, function(err, card) {
// 			if (err) throw err;
// 			res.send(card);
// 		});
		
// 	});

// 	app.post('/api/card', function(req,res) {
// 		//if Id is found, means it's an update
// 		if (req.body.id) {
// 			CardGen.findByIdAndUpdate(req.body.id, {
// 				question: req.body.question, 
// 				answer: req.body.answer, 
// 				difficulty: req.body.difficulty}, function(err,card) {
// 					if (err) throw err;

// 					res.send('Success');
// 				}
// 			);
// 		}

// 		else {
// 			var newCard = CardGen({
// 				username: req.body.username,
// 				quesType: req.body.quesType,
// 				question: req.body.question,
// 				answer: req.body.answer,
// 				difficulty: req.body.difficulty
// 			});
// 			newCard.save(function(err) {
// 				if (err) throw err;
// 				res.send('Success');
// 			});

// 		}
// 	});

// 	app.delete('/api/card', function(req, res) {
// 		CardGen.findByIdAndRemove(req.body.id, function(err) {
// 			if (err) throw err;
// 			res.send('Success');
// 		});
// 	});


// }