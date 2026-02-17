require('dotenv').config()
const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/blogs', (req,res) =>{
    res.send('blog.html')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
