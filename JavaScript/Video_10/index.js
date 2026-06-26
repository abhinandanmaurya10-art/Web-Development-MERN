// let num = Number(prompt("Enter any +ve integer: "));

// let fact = 1;

// for(let i = 1; i <= num; i++){
//     fact *= i;
// }

// console.log(fact);


let a = 6

function factorial(number){
    let arr = Array.from(Array(number+1).keys())
    let c = arr.slice(1,).reduce((a,b)=>{
        return a* b

    })
    console.log(c)


}
factorial(a)