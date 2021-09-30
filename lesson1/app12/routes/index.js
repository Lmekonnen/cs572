const express=require("express")
const router=express.Router()
router.route("/json")
.get(function(req,res){
    console.log("Json got request")
    res.status(200).json({"json":true})
})
.post(function(req,res){
    console.log("Json got request")
    res.status(200).json({"json":false})
})