const dbConnection = require("../data/dbConnection");
const mongoose= require("mongoose");
const Student= mongoose.model("Student");
module.exports.studentGetAll= function(req, res) { 
    var offset= 0;
    var count= 5;
    var maxCount=9;
if (req.query && req.query.offset) {
offset= parseInt(req.query.offset, 10); }
if (req.query && req.query.count) { 
    count= parseInt(req.query.count, 10);
}
if (isNaN(offset) || isNaN(count)) {
    res.status(400).json({"message": "QueryString Offset and Count should be numbers"}); 
    return;
    }
    if (count > maxCount) {
        res.status(400).json({"message": "Cannot exceed count of "+ maxCount});
        return; }

Student.find().skip(offset).limit(count).exec(function(err, students) {
    if (err) {
        console.log("Error finding students"); 
        res.status(500).json(err);
    } else {
        console.log("Found students", students);
        res.status(200).json(students);
    }
     });
};
module.exports.studentGetOne= function(req, res) { 
    const studentId= req.params.studentId;
    if(!mongoose.isValidObjectId(studentId)) {
        console.log("Student ID invalid");
        res.status(404).json({"message":"Student ID is invalid"});
        return;
    }else{
        Student.findById(studentId).exec(function(err, students) {
            if (err) {
                console.log("Error finding student"); 
                res.status(500).json({"message":"Error finding student"});
            } else if(!students) {
                res.status(404).json({"message" : "Student ID not found"})
            } else {
                res.status(200).json(students); 
            }
        });
    };
    }
    