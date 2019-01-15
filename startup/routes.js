const express = require('express');
const docs = require('../routes/docs');
const home = require('../routes/home');

 module.exports = function(app){

 	app.use(express.json());
	app.use('/api/docs', docs);
	app.use('/', home);

 }