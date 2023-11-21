// to access our private port
require('dotenv').config()

const express = require('express')
const workoutsRoutes = require('./routes/workouts')
const mongoose = require('mongoose')


// creating express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutsRoutes)

// connect database
mongoose.connect(process.env.URI)
    .then(() => {
        // listening to requests
        app.listen(process.env.PORT, () => {
        console.log('Connected to db & Listening on Port', process.env.PORT)

        })
    })
    .catch((error) => {
        console.log(error)
    })








