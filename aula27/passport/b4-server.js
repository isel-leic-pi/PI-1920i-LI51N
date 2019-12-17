'use strict'

const DEFAULT_PORT = '8080'
const b4Service =  require('./b4-service-mem')()

const expressSession = require('express-session')

const express = require('express')
const app = express() 

const authService = require('./auth-service-mem')()

app.use(expressSession({ secret: 'keyboard cat' }))
app.use(express.json())
app.use('/', express.static('dist') )

const authApi = require('./auth-web-api')(app, express.Router(), authService)
const b4Api = require('./b4-web-api')(express.Router(), b4Service)

app.use('/api/auth',authApi)
app.use('/api/bundles', verifyAuthenticated, b4Api)

app.listen(process.argv[2] || DEFAULT_PORT, ()=>console.log('Listening'))


function verifyAuthenticated(req, rsp, next) {
    if(req.isAuthenticated())
      return next()
    rsp.status(403).json({message:"Not Authenticated"})
  }