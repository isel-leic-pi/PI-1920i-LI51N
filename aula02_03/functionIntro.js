function f1(){
    return "Function f1"
}

console.log(f1())

let v1 = f1

console.log(v1())

v1 = "STR"

console.log(v1)

let f2 = function(){ return "Function f2"}
console.log(f2())

let f3 = function(){ console.log("Function f3")}

let v2 = f3()

console.log(v2)

function f4(a,b,c)
{
    console.log(a)
    console.log(b)
    console.log(c)
}

f4(1,2,3)
f4(1,2)
f4(1)

function f5(a, ...rest)
{
    console.log(a)
    console.log(rest)
}

f5(1)
f5(1,2,3)
f5(1,2,3,4)

function f6(func,n)
{
    for(let i=0; i<n; ++i)
    {
        func()
    }
}

f6(f3,5)

function f7()
{
    function f8(x)
    {
        console.log(x)
    }

    f8(5)
    f8(10)
}

f7()
