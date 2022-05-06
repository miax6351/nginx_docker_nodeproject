module.exports = (sequelize, Datatypes) => {

    const Course = sequelize.define("course", {
      id: { type: Datatypes.STRING(25), allowNull: false, primaryKey: true },
      courseName : { type: Datatypes.STRING, allowNull: true, primaryKey: false },
      courseDescription: { type: Datatypes.STRING, allowNull: false},
      ects: { type: Datatypes.INTEGER, allowNull: false },
      instructorId: { type: Datatypes.STRING, allowNull: false},
    },
    {
        tableName: "course",
        frezeTableName: true,
        timestamps: false
    });

    Course.associate = function(models){
      models.course.hasMany(models.assignment)
     /* models.course.hasOne(models.instructor)*/
      models.course.hasMany(models.lesson)
      models.course.hasMany(models.grade)
  }

    return Course;
  };

