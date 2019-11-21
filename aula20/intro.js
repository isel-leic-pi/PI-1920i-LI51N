'use strict'

function delay(timeout, success, cb){
    setTimeout(()=>{
        if(!success) return cb('Error')
        cb(null,'Success')
    },timeout)
}

function delayPromise(timeout, success){
    return new Promise((resolve, reject)=>{
        delay(timeout, success, (err,result)=> err ? reject(err) : resolve(result) )
    })
}

delay(1000, true, (err,result)=>{
    if(err) return console.log(err)
    console.log(result)
})

delay(2000, false, (err,result)=>{
    if(err) return console.log(err)
    console.log(result)
})

delayPromise(1000, true)
    .then(result => console.log('pDelayResult 1000 ' + result))
    .catch(err => console.log('pDelayReject 1000 '+ err))

delayPromise(2000, false)
    .then(result => console.log('pDelayResult 2000 ' + result))
    .catch(err => console.log('pDelayReject 2000 ' + err))