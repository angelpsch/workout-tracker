const express = require('express'); 

const router = express.Router();
const Stats = require('../models/');
const Workout = require('../models/');
const Exercise = require('../models/');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout_tracker', { useNewUrlParser: true });


router.post("/api/stats", ({ body }, res) => {
    Stats.create(body)
      .then(dbStats => {
        res.json(dbStats);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.post("/api/exercise", ({ body }, res) => {
    Exercise.create(body)
      .then(dbExercise => {
        res.json(dbExercise);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
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


// Get all exercises
router.get("/exercise", async (req, res) => {
    const exercise = await Exercise.find()
    res.send(exercise)
})




module.exports = router;