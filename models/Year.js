const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Month = require('./Month')

const yearSchema = new mongoose.Schema({
	y_name: String,
	child_m: [{
		type: Schema.Types.ObjectId,
		ref: 'Month'
	}]
},
{
	versionKey: false
})
module.exports = mongoose.model('Year',  yearSchema)