const express = require('express')
const app = express()

app.use(firstMiddleware)
app.use(secondMiddleware)

app.get('/', rootHandler)

app.listen(8080, ()=>console.log('Listening'))

function firstMiddleware(req,res,next){
    console.log('First Middleware')
    next()
}

function secondMiddleware(req,res,next){
    console.log('Second Middleware')
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