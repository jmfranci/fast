const mongoose = require('mongoose');
const Joi = require('joi');

const docSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 3},
	description: {type: String},
	requirements: {type: [String], required: true},
	locations: {type: [Object]},
	emitters: {type: [Object]},
	product: {type: String},
	source: {type: String},
	files: {type: [Object]},
	ete: {type: String},	//Estimated Time of Execution
	department: {type: String},
	applicants: {type: String, default: 'Cidadãos'},
	fee: {type: String, default: '0'},
	fee_unit: {type: String, default: 'KZ'},
	necessary_docs: {type: [Object]}
});

const Doc = mongoose.model('Doc', docSchema);

function validateDoc(doc) {
  const schema = {
    name: Joi.string().min(3).required(),
    description: Joi.string(),
    requirements: Joi.array().items(Joi.string()).required(),
    locations: Joi.array().items(Joi.object()),
    emitters: Joi.array().items(Joi.object()),
    product: Joi.string(),
    source: Joi.string(),
    ete: Joi.string(),
    department: Joi.string(),
    files: Joi.array().items(Joi.object()),
    applicants: Joi.string(),
    fee: Joi.string(),
    fee_unit: Joi.string(),
	necessary_docs: Joi.array().items(Joi.object()),
  };
  return Joi.validate(doc, schema);
}

module.exports.validateDoc = validateDoc;
module.exports.Doc = Doc;