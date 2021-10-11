const express=require("express");
const router=express.Router();
const jobsController=require("../controller/job.controller");
const locationController=require("../controller/location.controller");

router.route("/jobs")
.get(jobsController.jobsGetAll)
.post(jobsController.jobsAddOne)

router.route("/jobs/:jobId")
.put(jobsController.jobsUpdateOne)
.delete(jobsController.jobDeleteOne)
.get(jobsController.jobGetOne)

router.route("/jobs/:jobId/location")
.get(locationController.locationGetAll)
.post(locationController.locationAddOne)

router.route("/jobs/:jobId/location/:locationId")
.put(locationController.locationUpdateOne)
.delete(locationController.locationDeleteOne)
.get(locationController.locationGetOne)

module.exports=router