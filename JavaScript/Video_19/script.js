console.log("async function ");


// async  function getdata(){
//     return new Promise((reslove,reject)=>{
//         setTimeout(() => {
//             reslove(455)
            
//         }, 4000);
//     })
// }

async  function getdata(){
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    console.log(data);
 
}

async function main() {
    console.log("Loding Modules");
    console.log("Do something else");
    console.log("Load data");

    let data = await getdata()

    console.log(data);

    console.log("process data");

    console.log("task 2");
}
main()


// data.then((v)=>{
//     console.log(data);
//     console.log("process data");
//     console.log("task 2");
    
    
    
// })


