const mongoose = require('mongoose');

module.exports = function(){
	mongoose.connect('mongodb://general:Iloveangoapp2019@ds155644.mlab.com:55644/heroku_qkvk099r')
	.then(() => console.log('Connected to MongoDB...'))
}
