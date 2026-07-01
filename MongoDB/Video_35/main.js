const express = require('express');
const app = express()
const mongoose = require('mongoose');
const Employee = require('./modles/Employee');
const port = 3000
mongoose.connect('mongodb://127.0.0.1:27017/company');

app.set('view engine', 'ejs');

const getRandom = (arr)=>{
    let rno = Math.floor(Math.random() * (arr.length - 1))
    return arr[rno]
}


app.get('/', (req, res) => {
    res.render('index', { foo: "FOO" });
})

app.get('/generate', async(req, res) => {
    // clear the collection employee
    await Employee.deleteMany({})
    // generate random data
    let randomname = ["Roshan","Ankit","Kriti", "Rahul"]
    let randomLang = ["Hindi","marathi","Tamil","Bengli"]
    let randomCity = ["Delhi","Mumbai","Chenni", "Kolkata"]
    for (let index = 0; index < 10; index++) {
        let e =  await Employee.create({
            name: getRandom(randomname),
            salary: Math.floor(Math.random() * 250000),
            language: getRandom(randomLang),
            address: getRandom(randomCity),
            isManager: Math.random()>0.5?true:false

        })
    // await e.save()
    console.log(e);
    
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})