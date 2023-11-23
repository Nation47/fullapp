const express = require('express')
const router = express.Router()
const {
    createWorkout,
    getWorkout,
    getWorkouts
} = require('../controllers/workoutControllers')

// get all workout routes
router.get('/', getWorkouts)

// get single data
router.get('/:id', getWorkout)

// post data
router.post('/', createWorkout)

// delete data
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete single workout'})
})

// update data
router.patch('/:id', (req, res) => {
    res.json({mssg: 'update single workout'})
})

module.exports = router