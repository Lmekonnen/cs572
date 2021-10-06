const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const courseController = require("../controllers/courseController");

router.route("/students")
.get(studentController.studentGetAll)
.post(studentController.studentAddOne);


router.route("/students/:studentId")
.get(studentController.studentGetOne)
.put(studentController.studentUpdateOne)
.delete(studentController.studentDeleteOne);

router.route("/students/:studentId/courses")
.get(courseController.getAllStuCourses)
.post(courseController.stuCourseAdd)

router.route("/students/:studentId/courses/:courseId")
.get(courseController.getOneStuCourses)
.put(courseController.stuCourseUpdate)
.delete(courseController.stuCourseDelete);

module.exports = router 