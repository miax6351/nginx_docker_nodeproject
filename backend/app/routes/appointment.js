const appointmentController = require("../controllers/appointmentController");
const router = require("express").Router();


router.get('/',appointmentController.getAllAppointmentData);

router.post('/createAppointment', appointmentController.postAppointment);


module.exports = router;







