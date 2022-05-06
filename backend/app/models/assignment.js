module.exports = (sequelize, Datatypes) => {

    const Assignment = sequelize.define("assignment", {
      id: { type: Datatypes.INTEGER, allowNull: false, primaryKey: true },
      courseId: { type: Datatypes.INTEGER, allowNull: false, primaryKey: true },
      fileURL: { type: Datatypes.STRING, allowNull: true},
      openDate: { type: Datatypes.DATE, allowNull: false },
      dueDate: { type: Datatypes.STRING, allowNull: false},
    },
    {
        tableName: "assignment",
        frezeTableName: true,
        timestamps: false
    });

    Assignment.associate = function(models){
        models.assignment.belongsTo(models.course)
    }


    return Assignment;
  };

