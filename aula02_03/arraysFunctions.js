"use strict"

let a1 = [1,2,3,4]

function filter(array, func)
{
    let newArray = []
    for(let element of array)
    {
        if(func(element))
        {
            newArray.push(element)
        }
    }
    return newArray
}

let aF = filter(a1,function(e){return e % 2}) 
console.log(aF)
let aFArray = a1.filter(function(e){return e % 2})
console.log(aFArray)

function map(array, func)
{
    let newArray = []
    for(let element of array)
    {
        newArray.push(func(element))
    }
    return newArray
}

let aM = map(a1,function(e){return e * 3}) 
console.log(aM)
let aMArray = a1.map(function(e){return e * 3})
console.log(aMArray)

let tripleEven = a1.filter(function(e){return e % 2})
                    .map(function(e){return e * 3})

console.log(tripleEven)

function reduce(array, func, start)
{
    let current = start
    for(let element of array)
    {
        current = func(current, element)
    }
    return current
}

let sum = reduce(a1, function(c, e){return c + e}, 0)
console.log(sum);
let sumA = a1.reduce(function(c, e){return c + e}, 0)
console.log(sumA);


