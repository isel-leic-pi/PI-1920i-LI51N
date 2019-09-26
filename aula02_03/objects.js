let std1 = {name : "Joao", number : 1234}

console.log(std1)

std1.email = "mail@gmail.com"

console.log(std1)

delete std1.name

console.log(std1)

console.log(std1.number)
console.log(std1["number"])

function createStudent(name, number)
{
    let s = {}
    s.name = name
    s.number = number
    return s
}

let std2 = createStudent("Tiago", 2)

function showProps(obj)
{
    for(p in obj)
    {
        console.log(`${p} : ${obj[p]}`)
    }
}
showProps(std2)
