const express=require("express")
const { get } = require("http")
const router=express.Router()
const controllerGames=require("../controller/games.controller")
const router=express.Router()
router.route("/json")
get(controllerGames.gamesGetAll)

module.exports=router