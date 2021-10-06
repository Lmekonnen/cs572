const dbConnection = require("../data/dbConnection");
const mongoose= require("mongoose");
const Student= mongoose.model("Student");
module.exports.getAllStuCourses= function(req, res) { 
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

        const studentId= req.params.studentId;
        if(!mongoose.isValidObjectId(studentId)) {
            console.log("Student ID invalid");
            res.status(404).json({"message":"Student ID is invalid"});
            return;
        }else{
            Student.findById(studentId).select("courses").exec(function(err, student) {
                if (err) {
                    console.log("Error finding course"); 
                    res.status(500).json({"message":"Error finding course"});
                } else if(!student) {
                    res.status(404).json({"message" : "Student ID not found"})
                } else {
                    console.log("course found");
                    console.log(student.courses.length);
                    res.status(200).json(student); 
                }
            });
        };}
module.exports.getOneStuCourses= function(req, res) { 
    const studentId= req.params.studentId;
    const courseId=req.params.courseId;
    if(!mongoose.isValidObjectId(studentId)) {
        console.log("Student ID invalid");
        res.status(404).json({"message":"Student ID is invalid"});
        return;
    }else if(!mongoose.isValidObjectId(courseId)) {
        console.log("Course ID invalid");
        res.status(404).json({"message":"Course ID is invalid"});
        return;
    }
    else{
        Student.findById(studentId).select("courses").exec(function(err, student) {
            if (err) {
                console.log("Error finding student"); 
                res.status(500).json({"message":"Error finding student"});
            } else if(!student) {
                res.status(404).json({"message" : "Student ID not found"})
            } else {
                var coursefound = false;
                for(let i=0 ; i<student.courses.length;i++){
                    if(student.courses[i].id===courseId){
                        console.log("found");
                        coursefound=true;
                        res.status(200).json(student.courses[i]);
                        return;
                    }   
                } if (!coursefound) {
                    console.log("course doesnot found");
                    res.status(404).json({"message":"not found"})
                }
            }
        });
    };
    
}