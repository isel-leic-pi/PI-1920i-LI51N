function mult(a)
{
    return function(b) {return a * b}
}

let m10 = mult(10)

console.log(m10(4))
console.log(m10(10))

let m100 = mult(100)

console.log(m100(4))
console.log(m100(10))

console.log(m10(4))
console.log(m10(10))