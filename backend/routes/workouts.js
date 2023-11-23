const express = require('express')
const router = express.Router()
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutControllers')

// get all workout routes
router.get('/', getWorkouts)

// get single data
router.get('/:id', getWorkout)

// post data
router.post('/', createWorkout)

// delete data
router.delete('/:id', deleteWorkout)

// update data
router.patch('/:id', updateWorkout)

module.exports = router