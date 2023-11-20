// to access our private port
require('dotenv').config()

// creating express app
const express = require('express');
const app = express()

// react to request
app.get('/', (req, res) => {
    res.json({mssg: 'welcome to the app'})
})

// listening to requests
app.listen(process.env.PORT, () => {
    console.log('Listening on Port', process.env.PORT)
})