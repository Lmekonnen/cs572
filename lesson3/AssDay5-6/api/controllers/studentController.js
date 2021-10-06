const dbConnection = require("../data/dbConnection");
const mongoose = require("mongoose");
const Student = mongoose.model("Student");

module.exports.studentGetAll = function (req, res) {
    var offset = 0;
    var count = 5;
    var maxCount = 9;
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }
    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }
    if (isNaN(offset) || isNaN(count)) {
        res.status(400).json({ "message": "QueryString Offset and Count should be numbers" });
        return;
    }
    if (count > maxCount) {
        res.status(400).json({ "message": "Cannot exceed count of " + maxCount });
        return;
    }

    Student.find().skip(offset).limit(count).exec(function (err, students) {
        if (err) {
            console.log("Error finding students");
            res.status(500).json(err);
        } else {
            console.log("Found students", students);
            res.status(200).json(students);
        }
    });
};
module.exports.studentAddOne = function (req, res) {
    const newstudent = { "title": req.body.title }
    Student.create(newstudent,
        function (err, student) {
            if (err) {
                console.log("Error creating students");
                res.status(400).json(err);
            } else {
                console.log("student created", student);
                res.status(201).json(student);
            }
        });
}
module.exports.studentGetOne = function (req, res) {
    const studentId = req.params.studentId;
    if (!mongoose.isValidObjectId(studentId)) {
        console.log("Student ID invalid");
        res.status(404).json({ "message": "Student ID is invalid" });
        return;
    } else {
        Student.findById(studentId).exec(function (err, students) {
            if (err) {
                console.log("Error finding student");
                res.status(500).json({ "message": "Error finding student" });
            } else if (!students) {
                res.status(404).json({ "message": "Student ID not found" })
            } else {
                res.status(200).json(students);
            }
        });
    };
}
module.exports.studentUpdateOne = function (req, res) {
    const studentId = req.params.studentId;
    Student.findById(studentId).exec(function (err, student) {
        const response = { status: 204 };
        if (err) {
            console.log("Error finding student");
            response.status = 500;
            response.message = err;
        } else if (!student) {
            response.status = 404;
            response.message = { "message": "student ID not found" };
        }
        if (response.status !== 204) {
            res.status(response.status).json(response.message);
        } else {
            
            console.log(req.body);
            console.log(student);
            student.name = req.body.name;
            student.Grade = parseInt(req.body.Grade);
            
            student.save(function(err, updatedStudent) {
                if (err) {
                   
                    res.status(500).json(err);
                }
                else{
                    console.log("student updated");
                    res.status(200).json({"Message":"student updated",updatedStudent});
                }
                
            });
        }
    });
}
module.exports.studentDeleteOne = function (req, res) {
    const studentId = req.params.studentId;
    console.log("DELETE studentId ", studentId);
    Student.findByIdAndRemove(studentId).exec(function (err, deletedStudent) {
        const response = { status: 204,message:"Successfully removed" };
        if (err) {
            console.log("Error finding student");
            response.status = 500; 
            response.message = err;
        } else if (!deletedStudent) {
            response.status = 404;
            response.message = { "message": "student ID not found" };
        }
        res.status(response.status).json(response.message);
    });
}
module.exports.studentGetOne = function (req, res) {
    const studentId = req.params.studentId;
    if (!mongoose.isValidObjectId(studentId)) {
        console.log("student ID invalid");
        res.status(404).json({ "message": "student ID is invalid" });
        return;
    } else {
        Student.findById(studentId).exec(function (err, student) {
            if (err) {
                console.log("Error finding student");
                res.status(500).json({ "message": "Error finding student" });
            } else if (!student) {
                res.status(404).json({ "message": "student ID not found" })
            } else {
                res.status(200).json(student);
            }
        });
    };
}


