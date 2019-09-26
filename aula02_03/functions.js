function f1(x)
{
    console.log("Start f1");
    function f2(y)
    {
        console.log(x + " - " + y)
    }
    console.log("End f1");
    return f2
}

let f11 = f1(10)
let f12 = f1(100)


f11(5)
f11(20)

f12(300)
f12(400)