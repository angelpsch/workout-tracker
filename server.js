const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/workout_tracker", {
  useNewUrlParser: true,
  useFindandModify: true
});

// routes
app.use(require("./routes/index.js"));


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
