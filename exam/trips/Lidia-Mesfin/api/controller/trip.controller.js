const mongoose=require("mongoose");
const Trip=mongoose.model("Trip");

module.exports.tripGetAll=function(req,res){
    var offset=0;
    var count=5;
    var maxCount=9;
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
    Trip.find().skip(offset).limit(count).exec(function (err,trips) {
        if(err){
            console.log("Error finiding trips");
            res.status(500).json(err);
        }else{
            console.log("Found trips",trips.length);
            res.json(trips)
        }
        
    });
};
module.exports.tripAddOne=function(req,res){
    const newTrip={
        bikeid:req.body.bikeid,
        starttime:req.body.starttime,
        usertype:req.body.usertype,
        
};
    
    Trip.create(newTrip,
        function(err,trip){
            if(err){
                console.log("Error Creating trips");
                res.status(400).json(err)
            }else{
                console.log("trip created",trip);
                res.status(201).json(trip)
            }
        })
}
module.exports.tripUpdateOne=function(req,res){
    const tripId=req.params.tripId;
    Trip.findById(tripId).exec(function(err,trip){
        if(err){
            console.log("Error finding trip");
            res.status(500).json(err)
        }else if(!trip){
            console.log("trip id not found");
            res.status(404).json({"message":"trip id not found"})
        }else{
            bikeid=req.body.bikeid;
            starttime=req.body.starttime;
            usertype=req.body.usertype
   
            trip.save(function(err,updatedTrip)
            {
                if(err){
                    res.status(500).json(err)
                }else{
                    console.log("trip updated");
                    res.status(200).json({"message":"trip updates",updatedTrip})
                }
            })
            
        }
    })
}
module.exports.tripDeleteOne=function(req,res){
    const tripId=req.params.tripId;
    console.log("Delete tripId",tripId);
    Trip.findByIdAndRemove(tripId).exec(function(err,deletedTrip){
        if(err){
            console.log("Error finding trip");
            res.status(500).json(err)
        }else if(!deletedTrip){
            console.log("Trip id not found");
            res.status(404).json({"message":"Trip id not found"})
        }else{
            res.status(204).json({"message":"Trip deleted"})
        }
    })
}
module.exports.tripGetOne=function(req,res){
    const tripId=req.params.tripId;
    if(!mongoose.isValidObjectId(tripId)){
        console.log("trip id invalid");
        res.status(404).json({"message":"trip ID is invalid"});
        return;
    }else{
        Trip.findById(tripId).exec(function(err,trip){
            if(err){
                console.log("Error finding trip");
                res.status(500).json({"message":"Error finding trip"});

            }else if(!trip){
                res.status(404).json({"message":"trip id not found"})
            }else{
                res.status(200).json(trip)
            }
        })
    }
}