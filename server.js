// NPM dependencies
const express = require('express');
const bodyParser = require('body-parser');

//Express variables
const app = express();

//Setting initial post
var PORT = process.env.PORT || 3000;

//Body parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("Listening on PORT: http://localhost:" + PORT);
})





