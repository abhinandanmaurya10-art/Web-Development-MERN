const express = require('express');
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send('Hello World! get');
});

app.post('/', (req, res) => {
    console.log("POST request received");
    res.send('Hello World! post');
});

app.put('/', (req, res) => {
    console.log("PUT request received");
    res.send('Hello World! put');
});

app.get('/index', (req, res) => {
    console.log("This is index.html");
    res.sendFile('templetes/index.html', {root:__dirname})
});

app.get('/api', (req, res) => {
    res.json({a:1, b:2, c:3, d:4, e:5, f:6})
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});