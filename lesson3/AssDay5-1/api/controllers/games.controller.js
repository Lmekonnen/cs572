const dbConnection = require("../data/dbConnection");
const mongoose = require("mongoose");
const Game = mongoose.model("Game");

module.exports.gamesGetAll = function (req, res) {
    var offset = 0;
    var count = 5;
    var maxCount = 9;
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }
    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }
    if (isNaN(offset) || isNaN(count)) {
        res.status(400).json({ "message": "QueryString Offset and Count should be numbers" });
        return;
    }
    if (count > maxCount) {
        res.status(400).json({ "message": "Cannot exceed count of " + maxCount });
        return;
    }
    Game.find().skip(offset).limit(count).exec(function (err, games) {
        if (err) {
            console.log("Error finding games");
            res.status(500).json(err);
        } else {
            console.log("Found games", games.length);
            res.json(games);
        }
    });
};
module.exports.gamesGetOne = function (req, res) {
    const gameId = req.params.gameId;
    if (!mongoose.isValidObjectId(gameId)) {
        console.log("Game ID invalid");
        res.status(404).json({ "message": "Game ID is invalid" });
        return;
    } else {
        Game.findById(gameId).exec(function (err, game) {
            if (err) {
                console.log("Error finding game");
                res.status(500).json({ "message": "Error finding game" });
            } else if (!game) {
                res.status(404).json({ "message": "Game ID not found" })
            } else {
                res.status(200).json(game);
            }
        });
    };
}
