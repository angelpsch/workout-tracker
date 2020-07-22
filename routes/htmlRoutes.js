// have to use these to get the actual html files
const path = require("path");
module.exports = function(app) {
  // click route for 'continue' btn and 'new workout' btn
  app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};