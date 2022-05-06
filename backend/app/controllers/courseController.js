const model = require("../models")

    
    const getAllCourses = async (reg, res) => {
        let course = await model.course.findAll({});
        res.status(200).send(course);
    }

    module.exports = {
        getAllCourses
    }
