const express = require('express')
const app = express()


app.get('/', firstFunction, secondFunction, rootHandler)

app.listen(8080, ()=>console.log('Listening'))

function firstFunction(req,res,next){
    console.log('First Function')
    next()
}

function secondFunction(req,res,next){
    console.log('Second Function')
    next()
}

function rootHandler(req, res){
    logRequest(req)
    res.send("RootHandler")
}

function logRequest(req){
    console.log(req.hostname)
    console.log(req.method)
    console.log(req.url)
    console.log(req.path)
    console.log(req.params)
    console.log(req.query)
    console.log(req.body)
}