module.exports = (sequelize, Datatypes) => {
const Grade = sequelize.define("grade", {

    studentId: {type: Datatypes.STRING(25), allowNull: false, primaryKey: true },
    courseId: { type: Datatypes.INTEGER, allowNull: false, primaryKey: true },
    gradeDK: { type: Datatypes.INTEGER},

  },
  {
      tableName: "grade",
      frezeTableName: true,
      timestamps: false
  });

Grade.associate = function (models) {
    models.grade.belongsTo(models.student)
    models.grade.belongsTo(models.course)
}
return Grade;
};

