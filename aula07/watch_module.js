'use strict'

let fs = require('fs')

function monitorFiles(files, cb){

    files.forEach(watchFile)

    function watchFile(f){
        fs.access(f,fs.constants.F_OK,registerWatch)

        function registerWatch(err){
            if(err){
                return console.log("File does not exist")
            }
            fs.watch(f,cb)
        }  
    }
}

module.exports.watchFiles = monitorFiles
