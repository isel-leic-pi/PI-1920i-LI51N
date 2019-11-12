const express = require('express')
const app = express()

app.use(express.json())

app.get('/', rootHandler)
app.get('/bundles', getBundles)
app.get('/bundles/:id', getBundleById)
app.post('/bundles', postBundle)
app.all('/all', allHandler)


app.listen(8080, ()=>console.log('Listening'))

function allHandler(req, res){
    logRequest(req)
    res.json({prop1:"test"})
}

function postBundle(req, res){
    logRequest(req)
    res.send("Post bundle")
}

function getBundleById(req, res){
    logRequest(req)
    res.send("Get Bundle ID")
}

function getBundles(req, res){
    logRequest(req)
    res.send("Get Bundles")
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