let a =  [4,646,494,4,446,4,644,86,46,595]

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element) 
}

a.forEach((value,index, arr) => {
    console.log(value,index,arr)
    
});


let obj = {
    name: "Abhinandan",
    role: "Programmer",
    company: "Microsoft"
};

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element);
    }
}

for (const element of a) {
    console.log(element)
    
}