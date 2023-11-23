const Workout = require('../models/workoutModels')
const mongoose = require('mongoose')

// Get all data
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

// Get a single data
const getWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such workout'})
    }

    const workout = await Workout.findById(id)

    if(!workout) {
        return res(400).json({error: 'No such Workout'})
    }
    res.status(200).json(workout)
}

// Create new data
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body

    // create data into db
    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Delete Data

// Update data



module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout
}