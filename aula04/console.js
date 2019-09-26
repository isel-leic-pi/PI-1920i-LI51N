"use strict";

//console.log("STR1", { n : 2 , k : 4})

(function(){
    let oldConsoleLog = console.log
    console.log = function(...parms){
        //oldConsoleLog.call(this, new Date() + " " + parms)
        parms.unshift(new Date().toString())
        oldConsoleLog.apply(this, parms)
    }
})()

console.log("STR1", { n : 2 , k : 4})