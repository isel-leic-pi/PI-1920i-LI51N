'use strict'

const DEFAULT_PORT = '8080'
const b4Service =  require('./b4-service-mem')()

const express = require('express')
const app = express() 

app.use(express.json())
app.use('/', express.static('dist') )

const b4Api = require('./b4-web-api')(express.Router(), b4Service)

app.use('/api/bundles', b4Api)

app.listen(process.argv[2] || DEFAULT_PORT, ()=>console.log('Listening'))
