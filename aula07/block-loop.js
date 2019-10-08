'use strict'

let stop = false

setTimeout(() => stop=true, 5000)
while(!stop);

console.log('done')