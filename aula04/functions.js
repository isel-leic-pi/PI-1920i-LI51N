"use strict"

function f1()
{
    console.log(this)
}

let v1 = f1

v1()

let obj = {
    m : f1
}

obj.m()

console.log(obj.toString())

function Point(x, y){
    console.log(this)
    this.x = x
    this.y = y
    console.log(this)
}

let p1 = new Point(5,4)
console.log(p1)
let p2 = new Point(6,3)

function add(a,b) {return a+b}

console.log(add.call(undefined,5,4))
console.log(add.apply(,[5,4]))

f1.call(obj)