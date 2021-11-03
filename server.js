// Express dependency 
const express = require("express");

// Express config - creating express server
const app = express();

// Sets port, or port 3000
const PORT = process.env.PORT || 3000;

// Set up express app to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// ROUTES 
// Map to the route files 
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Start server
app.listen(PORT, function () {
	console.log("App listening on PORT: " + PORT);
});