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
        var bestMatch = {
            name: "",
            photo: "",
            difference: 1000
            ///// changes made here:
            ,desc: ""
        };

        console.log(req.body);

        // Take the result of user's post and parse it

        var userData = req.body;
        var userScores = userData.scores;

        console.log(userScores);

        // Calculate the difference between the user's scores and characters'

        var totalDifference = 0;


        // Loop through all characters' possibilities in the Database.
        for (var i=0; i < characters.length; i++) {

            console.log(characters[i]);
            totalDifference = 0;

            // Then loop through all the scores on each character
            for (var j=0; j < characters[i].scores[j]; j++) {

                // Difference between the scores and sum them into the totalDifference
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(characters[i].scores[j]));

                // If the sum of differences is less than the differences of the current best match
                if (totalDifference <= bestMatch.difference) {
                    // Reset the bestMatch to be the new character
                    bestMatch.name = characters[i].name;
                    bestMatch.photo = characters[i].photo;
                    ///// changes made here:
                    bestMatch.desc = characters[i].desc;
                    bestMatch.difference = totalDifference;
                } 
            }
        }

        characters.push(userData);
        console.log(bestMatch);

        res.json(bestMatch);
    });

}