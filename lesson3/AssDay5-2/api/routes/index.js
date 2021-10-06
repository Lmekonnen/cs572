const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const courseController = require("../controllers/courseController");

router.route("/students")
.get(studentController.studentGetAll)

router.route("/students/:studentId")
.get(studentController.studentGetOne);

router.route("/students/:studentId/courses")
.get(courseController.getAllStuCourses)

router.route("/students/:studentId/courses/:courseId")
.get(courseController.getOneStuCourses)

module.exports = router 