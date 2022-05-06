const gradeController = require("../controllers/gradeController");
const router = require("express").Router();


router.get('/', gradeController.getAllGrades);








module.exports = router;
