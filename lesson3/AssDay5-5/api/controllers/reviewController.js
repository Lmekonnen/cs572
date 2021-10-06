const mongoose = require("mongoose");
const Game = mongoose.model("Game");
module.exports.reviewGet = function (req, res) {
    const gameId = req.params.gameId;
    console.log("Get gameId ", gameId);
    Game.findById(gameId).select("review").exec(function (err, game) {
        const response = { status: 200, message: [] };
        if (err) {
            console.log("Error finding game");
            response.status = 500;
            response.message = err;
        } else if (!game) {
            console.log("Game id not found in database", id);
            response.status = 404;
            response.message = { "message": "Game ID not found" + gameId };
        } else {
            response.message = game.review ? game.review : [];
        }
        res.status(response.status).json(response.message);
    })
}

const _addReview = function (req, res, game) {
    game.reviews.push(req.body.review);
    // console.log("reviews",game);
    game.save(function (err, updatedGame) {
        const response = { status: 200, message: [] }; 
        if (err) {
            response.status = 500;
            response.message = err;
        } else {
            response.status = 201;
            response.message = updatedGame.reviews;
        }
        res.status(response.status).json(response.message);
    });
}
module.exports.reviewAdd = function (req, res) {
    const gameId = req.params.gameId;
    console.log("Get gameId ", gameId);
    Game.findById(gameId).select("reviews").exec(function (err, game) {
        const response = { status: 200, message: [] };
        if (err) {
            console.log("Error finding game");
            response.status = 500;
            response.message = err;
        } else if (!game) {
            console.log("Game id not found in database", id);
            response.status = 404;
            response.message = { "message": "Game ID not found" + gameId };
        }
        if (game) {
            _addReview(req, res, game);
        } else {
            res.status(response.status).json(response.message);
        }
    })
}
const _updateReview = function (req, res, game) {
    game.review.push(req.body.review);
    // game.review.location.coordinates = [parseFloat(req.body.lng), parseFloat(req.body.lat)];
    game.save(function (err, updateGame) {
        const response = { status: 204 }; 
        if (err) {
            console.log("Error finding game");
            response.status = 500;
            res.status(response.status).json(response.message);
        }else{
            res.status(200).json(updateGame)
        }
    });
}

module.exports.reviewUpdate = function (req, res) {
    const gameId = req.params.gameId;
    console.log("PUT gameId ", gameId);
    Game.findById(gameId).select("reviews").exec(function (err, game) {
        const response = { status: 204 };
        if (err) {
            console.log("Error finding game");
            response.status = 500;
        } else if (!game) {
            response.message = err;
            response.status = 404;
            response.message = { "message": "Game ID not found" };
        }
       
        if (response.status !== 204) {
            res.status(response.status).json(response.message);
        } else {
            _updateReview(req, res, game);
        }
    })
    
}

const _deleteReview = function (req, res, game) {
    // game.review.remove(req.body.review);
    game.review.remove(); 
    game.save(function (err, game) {
        const response = { status: 204 }; if (err) {
            console.log("Error finding game");
            response.status = 500;
            response.message = err;
        }
        res.status(response.status).json(response.message);
    });
}
module.exports.reviewDelete = function (req, res) {
    const gameId = req.params.gameId;
    console.log("PUT gameId ", gameId); 
    Game.findById(gameId).exec(function (err, game) {
        const response = { status: 204 }; 
        if (err) {
            console.log("Error finding game"); 
            response.status = 500;
        } else if (!game) {
            response.message = err;
            response.status = 404; 
        response.message = { "message": "Game ID not found" };
        };
        
        if (response.status !== 204) {
            res.status(response.status).json(response.message);
        } else {
            _deleteReview(req, res, game);
        }
    })
    
}