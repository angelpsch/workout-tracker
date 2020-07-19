const express = require("express")
const Workout = require("../models/workout.js")
const Stats = require("../models/stats.js")
const Exercise = require('../models/exercise.js')
const router = express.Router()

// Get all stats
router.get("/stats", async (req, res) => {
    const stats = await Stats.find()
    res.send(stats)
})

// Get all workouts
router.get("/workout", async (req, res) => {
    const workout = await Workout.find()
    res.send(workout)
})


// Get all excercises
router.get("/exercise", async (req, res) => {
    const exercise = await Exercise.find()
    res.send(exercise)
})


module.exports = router