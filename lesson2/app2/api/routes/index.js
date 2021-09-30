const express=require("express")
const { get } = require("http")
const router=express.Router()
const controllerGames=require("../controller/games.controller")
const router=express.Router()
router.route("/games")
get(controllerGames.gamesGetAll)

router.route("/games/:gamesId")
get(controllerGames.gamesGetOne)
module.exports=router