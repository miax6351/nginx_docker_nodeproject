const announcementController = require("../controllers/announcementsController");
const router = require("express").Router();



router.get('/getAll', announcementController.getAllAnnouncements);

router.get('/:id', announcementController.getAnnouncement);

router.put('/update/:id', announcementController.updateRead);








module.exports = router;







