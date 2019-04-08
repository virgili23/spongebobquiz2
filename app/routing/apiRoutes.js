var characters = require("../data/characters.js");

module.exports = function(app) {

    app.get("/api/characters", function(req, res) {
        res.json(characters);
    });

    // put survey user info into the same format as these objects
    app.post("/api/characters", function(req, res) {

        // determine who has the closest answers to the user
        // Stopped at 10:30

        // Take value from each question
        // put each value into an array "values"
        // sum the array
        // compare with values is closest to a character
        // then display that character
    })

}