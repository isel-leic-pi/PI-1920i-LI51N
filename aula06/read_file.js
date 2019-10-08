'use strict'

let fs = require('fs')

fs.readFile('file1.txt', processData)
fs.readFile('file2.txt', processData)

console.log("Done")

function processData(err, data){
    if(err){
        return console.log(err.toString())
    }
    console.log('-------------')
    console.log(data.toString())
}


