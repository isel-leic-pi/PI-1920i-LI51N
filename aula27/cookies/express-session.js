'use strict'

const express = require('express')
const expressSession = require('express-session')

const app = express()

app.use(expressSession({secret : 'PI', resave : false, saveUninitialized:true}))
app.get('/', rootHandler)
app.get('/test', testHandler)

app.listen(8080, ()=>console.log('Listening'))

let bag = {
    items : ['smartphone','cover'],
    value : 1700
}

function rootHandler(req, res){
    req.session.name = "Filipe"
    req.session.bag = JSON.stringify(bag)
    res.send('<a href="/test">test</a> ')
}

function testHandler(req, res){
    console.log(req.session)
    res.send('<a href="/">root</a> ')
}