

console.log("Hey this javascript tutorial")



var a =  5;  // Globle space varibles
var b = 6;
var c = "Hello";

console.log(a + b + 7)
console.log(typeof a, typeof b, typeof c)

{
    let  a = 66; // block level variables
    console.log(a)
}
console.log(a)

// const c = 3.14;
// c = c + a; //This is not allowed because this is constant 

let x = "Hello World!";
let y = 55;
let z = 3.55;
const p = true;
let q = undefined;
let r  = null;

console.log(x, y, z, p , q, r)
console.log(typeof x, typeof y, typeof z, typeof p , typeof q, typeof r)


// CREATING OBJECT KEYWORD
let o = {
    name: "Abhinandan",
    "job role": "Software Developer",
    salary: 120000
}

console.log(o)
o.salary = "100cr"  // This will add in the key value pairs
console.log(o)