const lessonPlanController = require("../controllers/lessonplanController");
const router = require("express").Router();


router.get('/',lessonPlanController.getAllLessonPlanData);

router.post('/postLessonplanRow',lessonPlanController.postLessonplanRow);


module.exports = router;







