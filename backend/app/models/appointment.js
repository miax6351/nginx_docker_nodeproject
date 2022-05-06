module.exports = (sequelize, Datatypes) => {

    const Appointment = sequelize.define("appointment", {
      studentId: { type: Datatypes.STRING, allowNull: false, primaryKey: true },
      appointmentId: { type: Datatypes.INTEGER, allowNull: true, primaryKey: true },
      startDate: { type: Datatypes.DATE, allowNull: false},
      endDate: { type: Datatypes.DATE, allowNull: false },
      title: { type: Datatypes.STRING, allowNull: false},
      courseId: { type: Datatypes.STRING, allowNull: true},
      
    },
    {
        tableName: "appointment",
        frezeTableName: true,
        timestamps: false
    });

    /*Appointment.associate = function(models){
      models.appointment.belongsTo(models.student)
    }*/


    return Appointment;
  };


  /*CREATE TABLE appointment (
    studentId varchar(25),
    appointmentId int AUTO_INCREMENT,
    startDate date,
    endDate date,
    title varchar(25),
    courseId int,
    PRIMARY KEY (studentId, appointmentId),
    FOREIGN KEY (studentId) REFERENCES student (id),
    FOREIGN KEY (courseId) REFERENCES lesson (courseId)
  ) ENGINE=MyISAM;*/
