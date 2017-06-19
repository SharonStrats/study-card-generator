var CardGen = require('../models/cardGenModel');

module.exports = function(app) {

	app.get('/api/setupCardGen', function(req,res) {

		//seed database

		var starterCardGen = [

		];

		CardGen.create(starterCardGen, function(err, results) {
			res.send(results);
		});
	});
}