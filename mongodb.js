const mongoose = require('mongoose')
const db = mongoose.connection

mongoose.connect('mongodb://localhost/test')
db.on('error', console.error.bind(console, 'connect error:'))
db.once('open', ()=> {
	console.log('mongoose opened!')
})