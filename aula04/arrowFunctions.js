"use strict"

let f1 = (a,b) => a+b
let f2 = a => a*2

console.log(f1(2,3))
console.log(f2(2))

function Point(x, y){
    this.x = x
    this.y = y

    this.add = function(p) {
        return new Point(this.x + p.x, this.y + p.y)
    }

    //this.add = p => new Point(this.x + p.x, this.y + p.y)
}

let p1 = new Point(5,4)
console.log(p1.add(p1))

let p2 = new Point(6,5)
console.log(p2.add(p2))

let f3 = p1.add

console.log(f3.call(p1,p2))