'use strict'

//This code was made to show a simplified version of the modules used in the first phase of the project

const http = require('http')

const BUNDLES_DATA_HOST = 'localhost:9200'
const DEFAULT_PORT = '8080'

const bundlesData = require('./bundles-data')(BUNDLES_DATA_HOST)
const booksData = require('./books-data')
const b4Service =  require('./b4-service')(booksData,bundlesData)
const b4Api = require('./b4-web-api')(b4Service)
const router = require('./simple-router')

router.get('/bundles', b4Api.getAllBundles)
router.post('/bundles', b4Api.createBundle)

server = http.createServer(router)

server.listen(process.argv[2] || DEFAULT_PORT, ()=>console.log('Listening'))
