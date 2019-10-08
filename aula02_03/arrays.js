"use strict"

let a1 = [1,"STR",3,true]

console.log(a1.length)
console.log(a1)

a1[100] = "pos 100"

console.log(a1.length)
console.log(a1[50])
console.log(a1)

a1.p1 = "p1"

console.log(a1["p1"])


let a2 = [1,5,7,"STR"]

function showProps(obj)
{
    for(let p in obj)
    {
        console.log(`${p} : ${obj[p]}`)
    }
}
showProps(a2)

for(let i=0; i < 4; ++i)
{
    console.log(a2[i])
}