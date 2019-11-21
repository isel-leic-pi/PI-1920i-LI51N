'use strict'

function pNumber(s){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(s.length),1000)
    })
    
}

function pBoolean(n){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(n % 2 == 0),1000)
    })
}

function pString(b){ 
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(b ? 'ABC' : 'XYZ'),1000)
    })   
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

function delay(timeout, success, cb){
    setTimeout(()=>{
        if(!success) return cb('Error1')
        cb(null,'Success')
    }, timeout)
}

function delayPromise(timeout, success){
    return new Promise((resolve, reject)=>{
        delay(timeout, success, (error, result) => error ? reject(error) : resolve(result))
    })
}

function runPromises(text){
    pNumber(text)
        .then(pBoolean /*n => pBoolean(n)*/)
        .then(pString/*b => pString(b)*/)
        .then(console.log/*s => console.log(s)*/)  
        .catch(e => console.log('Fail ' + e))     
}

async function runAsyncAwait(text){
    try{
        let n = await pNumber(text)
        let b = await pBoolean(n)
        let s = await pString(b)
        console.log(s)
    }catch(e){
        console.log('Fail ' + e)
    }

}

console.log('Done Really?')

//run('ISEL')
runPromises('ISEL')