const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Month = require('./Month')

const yearSchema = new mongoose.Schema({
	_id: Number,
	y_name: String,
	child_m: [{
		type: Number,//Schema.Types.ObjectId,
		ref: 'Month'
	}]
},
{
	versionKey: false
})
module.exports = mongoose.model('Year',  yearSchema)