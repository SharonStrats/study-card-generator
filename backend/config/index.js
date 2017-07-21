var config = require('./config');

module.exports = {

	getDbConnectionString: function() {
		if (config.development === true) {
			// this is for local development database
			return "mongodb://127.0.0.1:27017/flash-card"
		}
		else {
			return 'mongodb://' + config.uname + ':' + config.pwd + '@ds127872.mlab.com:27872/study-card-generator';
		}
		
	},
	
	getSecretKey: config.secret

}