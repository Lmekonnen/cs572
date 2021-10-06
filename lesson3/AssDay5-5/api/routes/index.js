const express = require("express");
const router = express.Router();
const gamesController = require("../controllers/games.controller");
const publisherController = require("../controllers/publisherController");
const reviewController = require("../controllers/reviewController")

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

router.route("/games/:gameId/reviews") 
.get(reviewController.reviewGet) 
.post(reviewController.reviewAdd) 
.put(reviewController.reviewUpdate) 
.delete(reviewController.reviewDelete);

module.exports = router 