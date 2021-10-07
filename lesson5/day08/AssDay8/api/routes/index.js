const express = require("express");
const router = express.Router();
const gamesController = require("../controllers/games.controller");
const publisherController = require("../controllers/publisherController")

router.route("/games")
.get(gamesController.gamesGetAll)
.post(gamesController.gamesAddOne)


router.route("/games/:gameId")
.get(gamesController.gamesGetOne)
.put(gamesController.gamesUpdateOne)
.delete(gamesController.gameDeleteOne);

router.route("/games/:gameId/publisher") 
.get(publisherController.publisherGet) 
.post(publisherController.publisherAdd)
.put(publisherController.publisherUpdate)
.delete(publisherController.publisherDelete);

module.exports = router 