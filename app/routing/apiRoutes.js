var characters = require("../data/characters.js");

module.exports = function(app) {

    app.get("/api/characters", function(req, res) {
        res.json(characters);
    });

}