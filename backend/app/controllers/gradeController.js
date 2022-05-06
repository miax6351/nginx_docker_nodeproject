const model = require("../models");
const course = require("../models/course");
const student = require("../models/student");

    
    const getAllGrades = async (reg, res) => { 
        let grades = await model.grade.findAll({
            include: {
                model: student, required: true, attributes:['studentId'],
                model: course, required: true, attributes:['courseName']}
                    
        });
        res.status(200).send(grades);
    }

    module.exports = {
        getAllGrades,
    }
