var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var cardGenSchema = new Schema({
	username: String,
	quesType: String,
	question: String,
	answer: String,
	difficulty: String
});

var CardGen = mongoose.model('CardGen', cardGenSchema);

module.exports = CardGen;