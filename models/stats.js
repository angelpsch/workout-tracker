const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const statsSchema = new Schema({
    title: String,
    content: String
})

const Stats = mongoose.model('stats', statsSchema)
module.exports = Stats; 