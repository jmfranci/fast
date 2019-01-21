//Customize this route
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const {Doc, validateDoc} = require('../models/doc');
const _ = require('lodash');

router.get('/', async (req,res) => {
	const docs = await Doc.find().sort('name');
	res.status(200).send(docs);
});

router.get('/:id', async (req,res) => {
	if (!mongoose.Types.ObjectId.isValid(req.params.id)) 
		return res.status(404).send('Id inválido');

	const doc = await Doc.findById(req.params.id);
	if (!doc) return res.status(404).send('Dados não encontrados');
	res.send (doc);
});

router.get('/search/all/:key', async (req,res) => {
	const docs = await Doc.find({ "name": { "$regex": req.params.key, "$options": "i" } });
	res.status(200).send(docs);
});

router.get('/search/names/:key', async (req,res) => {
	const docs = await Doc.find({ "name": { "$regex": req.params.key, "$options": "i" } });
	res.status(200).send(_.pick(req.body, ['name']));
});

router.post('/', async (req, res) => {
	const { error } = validateDoc(req.body); 
   	if (error) return res.status(400).send(error.details[0].message);

	let doc = new Doc(req.body);
	doc = await doc.save();
	res.send(doc);
});

router.put('/:id', (req,res) => {
	res.status(200).send(`Put/update record with id ${req.params.id} from docs `);
});

router.delete('/:id', (req,res) => {
	res.status(200).send(`Delete record with id ${req.params.id} from docs `);
});

module.exports = router;