const model = require("../models");

const getAllLessonPlanData = async (reg, res) => {
  let lessonplanData = await model.lessonplan.findAll({});
  res.status(200).send(lessonplanData);
};

const postLessonplanRow = async (reg, res) => {
  try {
    let lessonPlanRow = await model.lessonplan.create(
      {
            studentId: reg.body.studentId,
            course: reg.body.course,
            weekNo: reg.body.weekNo,
            date: reg.body.date,
            topic: reg.body.topic,
            learningObjectives: reg.body.learningObjectives,
            litterature: reg.body.litterature,
            pages: reg.body.pages
      }
    );
    res.status(200).send(lessonPlanRow);
  } catch {
      return res.status(400).send({
          message: 'Unable to create lessonplan row'
      })
  }

};

module.exports = {
    getAllLessonPlanData,
    postLessonplanRow,
  };