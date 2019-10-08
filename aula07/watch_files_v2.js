'use strict'

let fs = require('fs')
let wm = require('./watch_module')

if(process.argv.length < 3){
    console.log("Filename is missing")
}

let files = process.argv.slice(2) 
wm.watchFiles(files, processWatch)

console.log("Inital phase done")

function processWatch(eventType, fileName){
    console.log(eventType + ' : ' + fileName)
}