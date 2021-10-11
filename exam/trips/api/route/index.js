const express=require("express");
const router=express.Router();
const tripController=require("../controller/trip.controller");


router.route("/trips")
.get(tripController.tripGetAll)
.post(tripController.tripAddOne)

router.route("/trips/:tripId")
.put(tripController.tripUpdateOne)
.delete(tripController.tripDeleteOne)
.get(tripController.tripGetOne)

module.exports=router