const { error } = require("console");
const fs = require("fs")
console.log(fs);


console.log("Starting");

// fs.writeFileSync("hello.text", "Today I am learning Node.js")

fs.writeFile("hello2.text", "Today I am learning Node.js", ()=>{
    console.log("done");
    fs.readFile("hello2.text",(error,data)=>{
        console.log(error , data.toString());
        
    })

fs.appendFile("harry.text","harryrobo",(e,d)=>{
    console.log(d);
    
})

})


console.log("Ending"); 
