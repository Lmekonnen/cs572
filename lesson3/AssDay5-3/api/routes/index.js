const express = require("express");
const router = express.Router();
const gamesController = require("../controllers/games.controller");

router.route("/games")
.get(gamesController.gamesGetAll)
.post(gamesController.gamesAddOne)


router.route("/games/:gameId")
.get(gamesController.gamesGetOne)
.put(gamesController.gamesUpdateOne)
.delete(gamesController.gameDeleteOne);

module.exports = router 