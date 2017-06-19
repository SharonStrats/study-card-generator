var configValues = require('./config');

module.exports = {

	getDbConnectionString: function() {
		return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds127872.mlab.com:27872/study-card-generator';
	}

}