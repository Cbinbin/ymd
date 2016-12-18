const express = require('express')
const app = express()
const port = process.env.PORT || 2000
const cors = require('cors')
const bodyParser = require('body-parser')

require('./mongodb')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const routes = require('./routes.js')
app.use('/', routes.index)

app.listen(port, ()=> {
	console.log('Server is ruuning on port: ' + port)
	console.log('Use Ctrl-C to stop')
})