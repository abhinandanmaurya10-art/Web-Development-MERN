function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " what are you doing")
    console.log("Hey " + name + " your t-shirt is looking nice!")

}

nice("Abhinandan")
// We can do the same things by passing the value in the nice parameter

function sum(a, b, c = 3) {
    // console.log(a + b)
    return a + b + c
}

result1 = sum(6, 6)
result2 = sum(7, 6)
result3 = sum(8, 6)
result4 = sum(9, 6)

console.log("The sum of these two numbers is: ", result1)
console.log("The sum of these two numbers is: ", result2)
console.log("The sum of these two numbers is: ", result3)
console.log("The sum of these two numbers is: ", result4)


// arrow function

const funct1 = (x)=>{
    console.log("This is a arrow function ", x)

}

funct1(55)
funct1(78)
funct1(56)