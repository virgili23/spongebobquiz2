var path = require('path');
// var characters = require("../data/characters.js");

module.exports = function(app) {
    
    // On survey route, go to survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    // app.get("/api/characters", function(req, res) {
    //     res.json(characters);
    // });

    // If no pre-determined route, default to home page
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
};