const model = require("../models");

const getAllAppointmentData = async (reg, res) => {
  let appointmentData = await model.appointment.findAll({});
  res.status(200).send(appointmentData);
};

const postAppointment = async (reg, res) => {
  try {
    let appointment = await model.appointment.create(
      {
        studentId: reg.body.studentId,
        appointmentId: reg.body.appointmentId,
        startDate: reg.body.startDate,
        endDate: reg.body.endDate,
        title: reg.body.title,
        courseId: reg.body.courseId
      }
    );
    res.status(200).send(appointment);
  } catch {
      return res.status(400).send({
          message: 'Unable to create appointment'
      })
  }

};

module.exports = {
    getAllAppointmentData,
    postAppointment,
  };