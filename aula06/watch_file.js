'use strict'

let fs = require('fs')

if(process.argv.length < 4){
    return console.log("Filename is missing")
}

fs.watch(process.argv[2], watchFile)
fs.watch(process.argv[3], watchFile)

console.log("Inital phase done")

function watchFile(eventType, fileName){
    console.log(eventType + ' : ' + fileName)
}
