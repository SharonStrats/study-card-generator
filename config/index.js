var configValues = require('./config');

module.exports = {

	getDbConnectionString: function() {
		if (configValues.development = true) {
			// this is for local development database
			return 'mongodb://127.0.0.1:27017/flash-card'
		}
		else {
			return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds127872.mlab.com:27872/study-card-generator';
		}
		
	}

}