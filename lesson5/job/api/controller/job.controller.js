const mongoose=require("mongoose");
const Job=mongoose.model("Job");

module.exports.jobsGetAll=function(req,res){
    var offset=0;
    var count=98;
    var maxCount=99;
    if(req.query && req.query.offset){
        offset=parseInt(req.query.offset,10);

    }
    if(req.query && req.query.count){
        count=parseInt(req.query.count,10);

    }
    if(isNaN(offset)||isNaN(count)){
        res.status(404).json({"message":"QueryString offset and count  not a number"});
        return;
    }
    if(count>maxCount){
        res.status(400).json({"message":"Cannot exceed max count"+maxCount});
        return;
    }
    Job.find().skip(offset).limit(count).exec(function (err,jobs) {
        if(err){
            console.log("Error finiding jobs");
            res.status(500).json(err);
        }else{
            console.log("Found jobs",jobs.length);
            res.json(jobs)
        }
        
    });
};
module.exports.jobsAddOne=function(req,res){
    const newjob={
        title:req.body.title,
        salary:req.body.salary,
        description:req.body.description,
        experience:req.body.experience,
        skills:req.body.skills,
        postDate:req.body.postDate
};
    
    Job.create(newjob,
        function(err,job){
            if(err){
                console.log("Error Creating Jobs");
                res.status(400).json(err)
            }else{
                console.log("Job created",job);
                res.status(201).json(job)
            }
        })
}
module.exports.jobsUpdateOne=function(req,res){
    const jobId=req.params.jobId;
    Job.findById(jobId).exec(function(err,job){
        if(err){
            console.log("Error finding job");
            res.status(500).json(err)
        }else if(!job){
            console.log("job id not found");
            res.status(404).json({"message":"Job id not found"})
        }else{
            job.title=req.body.title;
            job.salary=req.body.salary;
            job.description=req.body.description;
            job.experience=req.body.experience;
            job.skills=req.body.skills,
            job.postDate=req.body.postDate
            job.save(function(err,updatedJob){
                if(err){
                    res.status(500).json(err)
                }else{
                    console.log("Job updated");
                    res.status(200).json({"message":"Job updates",updatedJob})
                }
            })
            
        }
    })
}
module.exports.jobDeleteOne=function(req,res){
    const jobId=req.params.jobId;
    console.log("Delete jobId",jobId);
    Job.findByIdAndRemove(jobId).exec(function(err,deletedJob){
        if(err){
            console.log("Error finding job");
            res.status(500).json(err)
        }else if(!deletedJob){
            console.log("Game id not found");
            res.status(404).json({"message":"Game id not found"})
        }else{
            res.status(204).json({"message":"Game deleted"})
        }
    })
}
module.exports.jobGetOne=function(req,res){
    const jobId=req.params.jobId;
    if(!mongoose.isValidObjectId(jobId)){
        console.log("Job id invalid");
        res.status(404).json({"message":"Job ID is invalid"});
        return;
    }else{
        Job.findById(jobId).exec(function(err,job){
            if(err){
                console.log("Error finding job");
                res.status(500).json({"message":"Error finding job"});

            }else if(!job){
                res.status(404).json({"message":"Job id not found"})
            }else{
                res.status(200).json(job)
            }
        })
    }
}