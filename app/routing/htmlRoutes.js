//Dependencies
const path = require('path');

//Routing

module.exports = function(app) {

    //Route to survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    })

    //If no matching route is found, default to home page
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    })
}

// console.log(_dirname);