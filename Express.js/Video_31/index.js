const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName = "Addidas"
    let serchText = "Search now"
  res.render("index", {siteName : siteName, serchText: serchText})
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Addidas why and when?"
    let blogContent = "Ita a very good brand"
  res.render("blogpost", {blogTitle : blogTitle , blogContent: blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})