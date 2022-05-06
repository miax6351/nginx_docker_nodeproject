const courseController = require("../controllers/courseController");
const router = require("express").Router();


router.get('/', courseController.getAllCourses);


module.exports = router;







