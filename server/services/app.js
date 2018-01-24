module.exports = function (app) {

    //Basic model to be changed later
    var basicModels = require("./basicModels.js");
    basicModels(app);

    //trivia game
    var triviaModels = require("./trivia.js");
    triviaModels(app);

    //Call and Responce Basic
    app.get("/say/:message", function (req, res) {
        var msg = req.params["message"];
        console.log(msg);
        res.send({ message: msg });
    });
};