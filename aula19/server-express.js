const express = require('express')
const app = express()
const service = require('./service')
const routerBundleApi = require('./web-api')(express.Router(),service)


app.use('/files', express.static('public'))
app.use('/bundleApi', routerBundleApi)

app.listen(8080, ()=>console.log('Listening'))
