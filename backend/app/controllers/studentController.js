const model = require("../models");
const student = require("../models/student");
const studyclass = require("../models/studyclass");


const getAnnouncementThroughStudent = async (reg, res) => {
    let student = await model.student.findOne(
        {
            where: { id: 's205353'},

    include: [
      {
        model: model.announcement,
        attributes: ["title"]
      }
    ]});
    res.status(200).send(student);
}

const createStudent = async (req, res) => {
  const user ={
    id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    mail: req.body.mail,
    studyclassId: ""
  }
  
  try{
    let student = await model.student.create(user);
    res.status(200).send(student);
  } catch{
    return res.status(400).send({
      message: 'Unable to create student'
  })
  }
}

module.exports = {
    getAnnouncementThroughStudent,
    createStudent
}