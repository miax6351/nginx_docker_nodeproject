module.exports = (sequelize, Datatypes) => {

    const Student = sequelize.define("student", {

      id: {type: Datatypes.STRING(25), allowNull: false, primaryKey: true },
      firstName: { type: Datatypes.STRING, allowNull: false },
      lastName: { type: Datatypes.TEXT, allowNull: true },
      mail: { type: Datatypes.STRING, allowNull: false},
      studyclassId: { type: Datatypes.STRING, allowNull: true},
      token: { type: Datatypes.STRING, allowNull: false}  

    },
    {
        tableName: "student",
        frezeTableName: true,
        timestamps: false
    });

    Student.associate = function (models) {
      models.student.hasMany(models.announcement)
    //  models.student.belongsTo(models.studyclass)
      models.student.hasOne(models.lessonplan)
    }

    return Student;
  };
