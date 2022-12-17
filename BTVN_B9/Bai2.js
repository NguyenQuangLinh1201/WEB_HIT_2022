const obj = {
    name: Linh,
    age: 21,
    email: "linhnq@gmail.com"
}
const run = (o) => {
    var arr = [
        "name: " + o.name,
        "age: " + o.age,
        "email: "  + o.email
    ]
    return arr;
}

console.log(run(obj));