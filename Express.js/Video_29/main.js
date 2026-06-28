const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")

app.use(express.static("public"))

// Middleware 1 - logger for pur application
app.use((req, res, next) => {
    console.log(req.header);
    req.harry = 56
    
    const time = new Date().toLocaleString();

    fs.appendFileSync(
        "logs.txt",
        `${time} - ${req.method}\n`
    );

    console.log(`${time} - ${req.method}`);
    next();

    
})
// Middleware 2
app.use((req, res,next)=>{
    console.log("LOGED 2nd");
    next()
    
})

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1><h2>Welcome to express.js tutorial.</h2>')
})

app.get('/about', (req, res) => {
  res.send('<h2>What is express.js.</h2>')
})
app.get('/content', (req, res) => {
  res.send('<h2>Express.js is the framework of node.js</h2>' + req.harry)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${ port }`)
})