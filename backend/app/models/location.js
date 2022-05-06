module.exports = (sequelize, Datatypes) => {

    const Location = sequelize.define("location", {

      buildingName: {type: Datatypes.STRING(25), allowNull: false, primaryKey: true },
      roomNumber: { type: Datatypes.INTEGER, allowNull: false, primaryKey: true },
    },
    {
        tableName: "location",
        frezeTableName: true,
        timestamps: false
    });

    

    return Location;
  };

