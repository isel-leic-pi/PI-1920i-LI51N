'use strict'
const http = require('http')

const server = http.createServer(processRequest)
server.listen('8080',()=>console.log('Listening'))

function processRequest(req, res){
    console.log(req.method)
    console.log(req.url)
    console.log(req.headers)

    let data = ""

    req.on('data', chunck => data += chunck.toString())
    req.on('end', processBodyAndResponse)

    function processBodyAndResponse(){
        console.log('Received : ', data)
        res.setHeader('Content-Type','text/plain')
        res.end('Received and Done')
    }
}