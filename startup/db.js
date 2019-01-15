const mongoose = require('mongoose');

module.exports = function(){
	mongoose.connect('mongodb://localhost/fast')
	.then(() => console.log('Connected to MongoDB...'))
}

