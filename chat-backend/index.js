const express = require('express')
const config = require('./config/app')

const app = express()


app.get('/home', (req, res) => {
    return res.send('My Home Screen')
})

app.get('/login', (req, res) => {
    return res.send('My Login Screen')
})


const port = config.appPort

app.listen(port, () =>{
    console.log(`Server listening on port ${port}`);
})
console.log("hello duniya")