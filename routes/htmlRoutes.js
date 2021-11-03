// Dependencies 
const path = require("path");

module.exports = function(app) {
// HTML GET Request 
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // Default to index.html if no matching routes 
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
