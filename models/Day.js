const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Month = require('./Month')

const daySchema = new mongoose.Schema({
	d_owner: {
		type: Schema.Types.ObjectId,
		ref: 'Month'
	},
	d_name: String
},
{
	versionKey: false
})
module.exports = mongoose.model('Day',  daySchema)