var db = require("../models");

module.exports = function(app) {
    // Get workouts
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });
    // Create workouts
    app.post("/api/workouts", async (req, res)=> {
        try{
            const response = await db.Workout.create({type: "workout"})
            res.json(response);
        }
        catch(err){
            console.log("error occurred creating a workout: ", err)
        }
    })

    app.put("/api/workouts/:id", ({body, params}, res) => {

        const workoutId = params.id;
        let saves = [];
        db.Workout.find({_id: workoutId})
            .then(dbWorkout => {

                saves = dbWorkout[0].exercises;
                res.json(dbWorkout[0].exercises);
                let exerciseList = [...saves, body]
                console.log(exerciseList)
                workoutUpdate(exerciseList)
            })
            .catch(err => {
                res.json(err);
            });

        function workoutUpdate(exercises){
            db.Workout.findByIdAndUpdate(workoutId, {exercises: exercises}, function(err, doc){
            if(err){
                console.log(err)
            }

            })
        }
            
    })

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    }); 
};