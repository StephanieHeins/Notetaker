// Dependencies 
const fs = require("fs");
// var data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
var data = require("../db/db.json")

module.exports = function (app) {
// API GET Request 
// Read db.json, return saved notes as json 
    app.get("/api/notes", function(req, res) {
        res.json(data);
    });

// API POST Request 
// Add saved note to db.json 
    app.post("/api/notes", function (req, res) {
        data.push(req.body);

        // Assign ID 
        data.forEach((obj, i) => {
            obj.id = i + 1;
        });

        fs.writeFile("../db/db.json", JSON.stringify(data), function () {
            res.json(data);
        });
    });

// API DELETE Request 
    app.delete("/api/notes/:id", function (req, res) {
        var id = req.params.id;

        // Delete selected note & reassign id
        data.splice(id - 1, 1);
        data.forEach((obj, i) => {
        obj.id = i + 1;
        });

        // Return remaining notes 
        fs.writeFile("../db/db.json", JSON.stringify(data), function () {
        res.json(data);
        });
    });

};