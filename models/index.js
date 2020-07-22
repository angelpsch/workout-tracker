// const mongoose = require("mongoose");
// const Schema = mongoose.Schema; 

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/workout", {
//   useNewUrlParser: true,
//   useFindandModify: true
// });

// const exerciseSchema = new Schema({
//     type: {
//         type: String
//     }, 
//     name: {
//         type: String,
//         required: true
//     },
//     reps: {
//         type: Number,
//         required: false
//     },
//     duration: {
//         type: Number,
//         required: true
//     },
//     weight: {
//         type: Number,
//         required: false
//     },
//     sets: {
//         type: Number,
//         required: false
//     }
// })
// const workoutSchema = new Schema({
//     name: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     exercises: [{
//         type: Schema.Types.ObjectId,
//         ref: 'Exercise'
//     }]
// })
// const statsSchema = new Schema({
//     name: {
//         type: Number,
//         required: true
//     }
// })

// const Stats = mongoose.model('stats', statsSchema)
// module.exports = Stats; 

// const Workout = mongoose.model('Workout', workoutSchema)
// module.exports = Workout; 

// const Exercise = mongoose.model('Exercise', exerciseSchema)
// module.exports = Exercise; 
// ^^^^^ ignore, saving just in case


// Grab workouts from workout.js
module.exports = {
  Workout: require('./workout')
};
