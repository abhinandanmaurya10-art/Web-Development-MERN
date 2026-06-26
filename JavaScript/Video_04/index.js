console.log("Hey this is the loop tutorial in Javascript")


let a = 1;

// console.log(a)
// console.log(a + 1)
// console.log(a + 2)
// console.log(a + 3)

// using loop 

// for(i=0; i<=10; i++){
//     console.log(a+i)
// }

// Using object 

let obj = {
    name : "Abhinandan",
    role :"Programmer",
    company : "Microsoft"
}

 for (const key in obj) {  // forin
        console.log(key)    
    }

for (const c of "Abhinandan") {  // forof
    console.log(c)
}

// While loop 

// let i = 0;
// while(i < 7){
//     console.log(i)
//     i++; 
// }

// do - while loop

let i = 0
do {
    console.log(i)
    i++; 
}
 while (i<7);