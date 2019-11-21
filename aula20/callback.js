'use strict'

function toNumber(s,cb){
    setTimeout(()=>cb(s.length),100)
}

function toBoolean(n,cb){
    setTimeout(()=>cb(n % 2 == 0), 100)
}

function toString(b,cb){    
    setTimeout(()=>cb(b ? 'ABC' : 'XYZ', 100))
}

function run(text){
    toNumber(text, n =>{
        toBoolean(n, b =>{
            toString(b, s =>{
                console.log(s)
            })
         } )
    })
}

run('ISEL')