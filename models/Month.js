const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Year = require('./Year')
const Day = require('./Day')

const monthSchema = new mongoose.Schema({
	_id: Number,
	m_owner: {
		type: Number,//Schema.Types.ObjectId,
		ref: 'Year'
	},
	m_name: String,
	days: Number,
	child_d: [{
		type: Number,//Schema.Types.ObjectId,
		ref: 'Day'
	}]
},
{
	versionKey: false
})

module.exports = mongoose.model('Month',  monthSchema)