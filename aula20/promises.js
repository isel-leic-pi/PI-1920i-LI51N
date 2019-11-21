const pResolved = new Promise((resolve, reject)=>resolve(30))
const pRejected = new Promise((resolve, reject)=>reject('Error'))
const pPending = new Promise((resolve, reject)=>console.log('Processing'))

console.log(pResolved)
console.log(pRejected)
console.log(pPending)

pResolved
    .then(v => console.log('pResolved ' + v))
    .catch(e => console.log('pResolved ' + e))

pRejected
    .then(v => console.log('pRejected ' + v))
    .catch(e => console.log('pRejected ' + e))

console.log('Done Really?')