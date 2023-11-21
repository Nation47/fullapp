const express = require('express')
const router = express.Router()

// get all workout routes
router.get('/', (req, res) => {
    res.json({mssg: 'Get all workouts'})
})

// get single data
router.get('/:id', (req, res) => {
    res.json({mssg: 'Get single workout'})
})

// post data
router.post('/', (req, res) => {
    res.json({mssg: 'Post new workout'})
})

// delete data
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete single workout'})
})

// update data
router.patch('/:id', (req, res) => {
    res.json({mssg: 'update single workout'})
})

module.exports = router