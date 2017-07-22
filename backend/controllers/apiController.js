var CardGen = require('../models/cardGenModel');
var bodyParser = require('body-parser');

module.exports = function(app) {

 	app.use(bodyParser.json());
 	app.use(bodyParser.urlencoded({ extended: true}));

 	app.get('/api/cards/:uname', function (req,res) {

 		CardGen.find({username: req.params.uname},
 			function(err, cards) {
 				if (err) throw err;

 				res.send(cards);
 			});
 	});

	app.get('/api/cards/:id', function(req,res) {

 		CardGen.findById({ _id: req.params.id}, function(err, card) {
 			if (err) throw err;

 			res.send(card);
 		});
 	});

 	app.post('/api/card', function(req,res) {
 		if (req.body.id) {
 			CardGen.findByIdAndUpdate(req.body.id, {
 			username: req.body.username,
			quesType: req.body.quesType,
			question: req.body.question,
			answer: req.body.answer,
			difficulty: req.body.difficulty
 			}, function(err, card) {
 				if (err) throw err;

 				res.send('Success');
 			});

 		}

 		else {

 			var newCard = CardGen({
 				username: req.body.username,
 				quesType: req.body.quesType,
				question: req.body.question,
				answer: req.body.answer,
				difficulty: req.body.difficulty			
 			});

 			newCard.save(function(err) {
 				if (err) throw err;
 				res.send('Success');
 			});

 		}

 	});

 	app.delete('/api/card', function(req, res) {

 		CardGen.findByIdAndRemove(req.body.id, function(err) {
 			if (err) throw err;
 			res.send('Success');
 		});
 	});

}