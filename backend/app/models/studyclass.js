module.exports = (sequelize, Datatypes) => {

    const Studyclass = sequelize.define("studyclass", {

      id: {type: Datatypes.STRING, allowNull: false, primaryKey: true },
      semester: { type: Datatypes.STRING(25), allowNull: false },
      programmeId: { type: Datatypes.STRING, allowNull: false}
    },
    {
        tableName: "studyclass",
        frezeTableName: true,
        timestamps: false
    });

    Studyclass.associate = function(models){
        models.studyclass.hasMany(models.student)
    }
    

    return Studyclass;
  };

/*CREATE TABLE studyclass (
    id varchar(25) PRIMARY KEY,
    semester varchar(25),
    programmeId varchar(25),
    FOREIGN KEY (programmeId) REFERENCES studyprogramme (programmeId),
    FOREIGN KEY (id) REFERENCES student (id)
  );*/