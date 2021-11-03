// Dependencies 
const fs = require("fs");
var data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

module.exports = function (app) {
// API GET Request 
// Read db.json, return saved notes as json 
    app.get("/api/notes", function(req, res) {
        res.json(data);
    });

// API POST Request 


// API DELETE Request 


};