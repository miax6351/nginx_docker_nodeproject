module.exports = (sequelize, Datatypes) => {

    const LessonPlan = sequelize.define("lessonplan", {
      studentId: { type: Datatypes.STRING(25), allowNull: false, primaryKey: true },
      course: { type: Datatypes.STRING(25), allowNull: false, primaryKey: true },
      weekNo: { type: Datatypes.INTEGER, allowNull: false, primaryKey: true },
      date: { type: Datatypes.DATE },
      topic: { type: Datatypes.STRING},
      learningObjectives: { type: Datatypes.STRING},
      litterature: { type: Datatypes.STRING },
      pages: { type: Datatypes.INTEGER },
      
    },
    {
        tableName: "lessonplan",
        frezeTableName: true,
        timestamps: false
    });

    LessonPlan.associate = function(models){
      models.lessonplan.belongsTo(models.student)
    }
    
    return LessonPlan;
  };

  

