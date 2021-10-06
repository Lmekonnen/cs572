

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
module.exports.gamesAddOne = function (req, res) {
    const newGame=req.body;
    Game.create(newGame, function (err, game) {
            if (err) {
                console.log("Error creating games");
                res.status(400).json(err);
            } else {
                console.log("Game created", game);
                res.status(201).json(game);
            }
        });
}
module.exports.gamesUpdateOne = function (req, res) {
    const gameId = req.params.gameId;
    Game.findById(gameId).exec(function (err, game) {
        const response = { status: 204 };
        if (err) {
            console.log("Error finding game");
            response.status = 500;
            response.message = err;
        } else if (!game) {
            response.status = 404;
            response.message = { "message": "Game ID not found" };
        }
        if (response.status !== 204) {
            res.status(response.status).json(response.message);
        } else {
            
            console.log(req.body);
            console.log(game);
            game.title = req.body.title;
            game.year = parseInt(req.body.year);
            game.price = (req.body.price); 
            game.designer = req.body.designer;
            game.minPlayers = parseInt(req.body.minPlayers); 
            game.maxPlayers = parseInt(req.body.maxPlayers); 
            game.rate = (req.body.rate); 
            game.minAge = (req.body.minAge);
            game.save(function(err, updatedGame) {
                if (err) {
                   
                    res.status(500).json(err);
                }
                else{
                    console.log("Game updated");
                    res.status(200).json({"Message":"Game updated",updatedGame});
                }
                
            });
        }
    });
}
module.exports.gameDeleteOne = function (req, res) {
    const gameId = req.params.gameId;
    console.log("DELETE gameId ", gameId);
    Game.findByIdAndRemove(gameId).exec(function (err, deletedGame) {
        const response = { status: 204 };
        if (err) {
            console.log("Error finding game");
            response.status = 500; response.message = err;
        } else if (!deletedGame) {
            response.status = 404;
            response.message = { "message": "Game ID not found" };
        }
        res.status(response.status).json(response.message);
    });
}
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

