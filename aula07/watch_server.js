'use strict'

let net = require('net')
let fs = require('fs')

fs.watch('file1.txt', fileChanged)

let clients = [] 

let server = net.createServer()

server.on('connection', handleConnection)
server.on('listening', logListening)

server.listen(8080)
//Inital phase end

function handleConnection(clientSocket){
    console.log('New Connection')
    clientSocket.write('Hello')
    clients.push(clientSocket)

    //clientSocket.on('data', (d)=>console.log(d.toString()))
    clientSocket.on('close', ()=>console.log('Closed Connection'))

}

function logListening(){
    console.log("Listening")
}

function fileChanged(e,f){
    clients.forEach( c => c.write(`${e} : ${f}`))
}
