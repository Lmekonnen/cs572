const express=require("express")
const router=express.Router()
const controllerGames=require("../controller/games.controller")
router.route("/games").get(controllerGames.gamesGetAll)
router.route("/multiplication/:id").get(controllerGames.product)
module.exports=router