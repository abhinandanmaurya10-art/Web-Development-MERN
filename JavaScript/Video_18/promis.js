console.log('This is Promises');

let prom1 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if(a<0.5){
        reject("No random number is supporting you")
    }
    setTimeout(() => {
        console.log('Yes I am done');
        resolve("Abhinandan")
        
    }, 3000);
})

let prom2  = new Promise((resolve, reject)=>{
    let a = Math.random();
    if(a<0.5){
        reject("No random number is supporting you 2 ")
    }
    setTimeout(() => {
        console.log('Yes I am done 2 ');
        resolve("Abhinandan 2 ")
        
    }, 3000);
})

let prom3 = Promise.all([prom1, prom2])
prom3.then((a)=>{
    console.log('a');
    
}).catch((err)=>{
    console.log('Error Occure');
    
})


// prom1.then((a)=>{
//     console.log('a');
// }).catch((err)=>{
//     console.log("Error Occure");
    
// })

