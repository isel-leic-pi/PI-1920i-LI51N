'use strict'

//This code was made to show a simplified version of the modules used in the first phase of the project

const BUNDLES_DATA_HOST = 'localhost:9200'
const DEFAULT_PORT = '8080'

const bundlesData = require('./bundles-data')(BUNDLES_DATA_HOST)
const booksData = require('./books-data')
const b4Service =  require('./b4-service')(booksData,bundlesData)
const express = require('express')
const routerB4Api = require('./b4-web-api')(express.Router(),b4Service)

const app = express()

app.use(express.json())
app.use('/api/bundles', routerB4Api)

app.listen(process.argv[2] || DEFAULT_PORT, ()=>console.log('Listening'))
