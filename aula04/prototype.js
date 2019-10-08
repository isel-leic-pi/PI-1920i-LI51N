function Point(x, y){
    this.x = x
    this.y = y

    this.add = function(p) {
        return new Point(this.x + p.x, this.y + p.y)
    }
}

/*Point.prototype.add = function(p) {
    return new Point(this.x + p.x, this.y + p.y)
}*/

let p1 = new Point(5,4)

/*p1.add = function(p) {
    return new Point(this.x + p.x, this.y + p.y)
}*/

console.log(p1.add(p1))

let p2 = new Point(6,5)
console.log(p2.add(p2))

console.log(p2.test)

Object.prototype.test = "Test"

String.prototype.surround = function(l, r){ 
    return l + "-" + this + "-" + r; 
}

let s = "STR".surround("left", "right")
console.log(s)
console.log([].test)
console.log(function(){}.test)
console.log(p2.test)

