module.exports = (sequelize, Datatypes) => {

    const Studyprogramme = sequelize.define("studyprogramme", {

      programmeId: {type: Datatypes.STRING(25), allowNull: false, primaryKey: true },
      programmeName: { type: Datatypes.STRING, allowNull: false },
    },
    {
        tableName: "studyprogramme",
        frezeTableName: true,
        timestamps: false
    });

    

    return Studyprogramme;
  };


