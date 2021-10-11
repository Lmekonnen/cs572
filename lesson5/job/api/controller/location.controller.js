const mongoose=require("mongoose");
const Job=mongoose.model("Job");

module.exports.locationGetAll=function(req,res){
    const jobId=req.params.jobId;
    Job.findbyId(jobId).select("location").exec(function (err,location) {
        if(err){
            console.log("Error finiding jobs");
            res.status(500).json(err);
        }else{
            console.log("Found jobs",jobs.length);
            res.json(location)
        }
        
    });
};
module.exports.locationGetOne=function(req,res){
    const jobId=req.params.jobId;
    const locationId=req.params.locationId;
    if(!mongoose.isValidObjectId(jobId)){
        console.log("Job id invalid");
        res.status(404).json({"message":"Job ID is invalid"});
        return;
    }else{
        Job.findById(jobId).select("location").exec(function(err,job){
            const locationId= book.publishers.id(locationId);
            if(err){
                console.log("Error finding job");
                res.status(500).json({"message":"Error finding job"});

            }else 
            if(!location){
                res.status(404).json({"message":"location id not found"})
            }else{
                res.status(200).json(job)
            }
        })
    }
}
module.exports.locationAddOne=function(req,res){
    const jobId=req.params.jobId;
    Job.findById(jobId).exec(function(err,job){
        if(err){
            res.status(500).json(err);
        }else if(!job){
            console.log("Error Creating Jobs");
                res.status(400).json(err)
        }else{
            const newLocation=req.body.location;
            job.location.push(newLocation);
            job.save(function(err,newLocation){
                if(err){
                    res.status(500).json(err);
                }else{
                    console.log("location created",newLocation);
                    res.status(201).json(newLocation)
                }
            })
            
        }

    })           
 
}
module.exports.locationUpdateOne=function(req,res){
    const jobId=req.params.jobId;
    const locationId=req.params.locationId;
    Job.findById(jobId).exec(function(err,job){
        if(err){
            console.log("Error finding job");
            res.status(500).json(err)
        }else if(!job){
            console.log("job id not found");
            res.status(404).json({"message":"Job id not found"})
        }else{
            const editLocation=job.location.id(locationId);
            editLocation.title=req.body.title;
            editLocation.salary=req.body.salary;
            job.save(function(err,updatedLocation){
                if(err){
                    res.status(500).json(err)
                }else{
                    console.log("Job updated");
                    res.status(200).json({"message":"Job updates",updatedLocation})
                }
            })
            
        }
    })
}
module.exports.locationDeleteOne=function(req,res){
    const jobId=req.params.jobId;
    const locationId=req.params.locationId;
    Job.findById(jobId).exec(function(err,job){
        if(err){
            console.log("Error finding job");
            res.status(500).json(err)
        }else if(!job){
            console.log("Game id not found");
            res.status(404).json({"message":"Game id not found"})
        }else{
            job.location.id(locationId).remove();
            job.save(function(err,locationDeleted){
                if(err){
                    res.status(500).json(err);
                }else{
                    res.status(204).json({"location deleted":locationDeleted})
                }
            })

        }
    })
}
