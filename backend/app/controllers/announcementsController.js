const model = require("../models")
    

    
    const getAllAnnouncements = async (reg, res) => {
        let announcements = await model.announcement.findAll({});
        //let announcements = await model.announcement.findAll({
            //where: {studentId: studenId}})
        res.status(200).send(announcements);
    }

    const getAnnouncement = async (reg, res) => {
        let id = reg.params.id;
        let announcement = await model.announcement.findOne({where: { id: id}})
        res.status(200).send(announcement);
    }

    const updateRead =  async (reg, res) => {
        let id = reg.params.id;
        let announcement = await model.announcement.findOne({ where: { id: id} });

        announcement.isRead = true;
        await announcement.save();

        res.status(200).announcement;

    }

    module.exports = {
        getAllAnnouncements,
        getAnnouncement,
        updateRead
    }
