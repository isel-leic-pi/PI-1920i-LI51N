'use strict'

function add(a,b){
    return a+b
}

function addCB(a,b,cb){
    cb(a+b)
}

function addAsync(a,b,cb){
    setTimeout(()=>cb(a+b), 5000)
}

console.log('Before add')
let res = add(5,5)
console.log('After add')
processRes(res)

console.log('Before addCB')
addCB(5,6, processRes)
console.log('After addCB')

console.log('Before addAsync')
addAsync(5,7, processRes)
console.log('After addAsync')

//for(;;);

function processRes(result){
    console.log(result)
}