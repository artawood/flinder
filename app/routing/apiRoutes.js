//Load Data
const friendData = require("../data/friends");

//Routing
module.exports = function(app) {
    
    //API Get Request
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    //API Post Requests
    app.post("api/friends", function(req, res){
        //algorithm for running match user input with data in friend's list
    });

    app.post("api/clear", function() {
        //Empty out the inputs
    })
}