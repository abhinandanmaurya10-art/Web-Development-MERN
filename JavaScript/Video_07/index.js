console.log("This is the string tutorial: ")

let greet = "Hello";
console.log(greet[0]);
console.log(greet[1]);
console.log(greet[2]);
console.log(greet[3]);
console.log(greet[4]);
// console.log(greet[5]);   It will shows undefined

console.log(greet.length) // To  find the length of the string

let name = "Abhinandan";
let friend = "Ankit";


console.log("His name is "+ name + " and his friends name is "+ friend);
console.log(`His name is ${name} and his friends name is ${friend}`) // this is more convinent method. This is called String Interpolation.


let a = "Shivam";

console.log(a.toUpperCase())
console.log(a.toLowerCase())

// slicing in the string

console.log(a.slice(1,4))  // Index 1 included hoga aur index 4 nhi include hoga 

// Replacing element in the String

console.log(a.replace("Sh",66))

// Concatination

console.log(a.concat(name,"Verma"))

// Note : String are immutabel we can not change the original String.