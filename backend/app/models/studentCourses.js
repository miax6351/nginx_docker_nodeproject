
module.exports = (sequelize, Datatypes) => {

    const StudentCourses = sequelize.define("studentCourses", {
      studentId: { type: Datatypes.STRING(25), allowNull: false, primaryKey: true },
      courseId: { type: Datatypes.INTEGER, allowNull: false, primaryKey: true} ,
    },
    {
        tableName: "studentCourses",
        frezeTableName: true,
        timestamps: false
    });

    /*StudentCourses.associate = function(models) {
        models.studentCourses.hasMany(models.student)

    }*/

    return StudentCourses;
  };

  /*CREATE TABLE studentCourses (
    studentId varchar(25),
    courseId int,
    PRIMARY KEY (studentId, courseId),
    FOREIGN KEY (studentId) REFERENCES student (id),
    FOREIGN KEY (courseId) REFERENCES course (id)
  );
  
  CREATE TABLE location (
    buildingName varchar(25),
    roomNumber int,
    PRIMARY KEY (buildingName, roomNumber)
  );*/