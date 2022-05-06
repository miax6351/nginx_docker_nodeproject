const Sequelize = require("sequelize");
const fs = require("fs");
const path = require("path");
const dbConfig = require("../config/db.config.js");
const basename = path.basename(__filename);

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  dialect: dbConfig.DIALECT,
  dialectOptions: {
    connectTimeout: 1000,}, //mariadb connector option
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  /*pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }*/
});

sequelize.authenticate().then(() => {
  console.log("...connected to database")
})
.catch(err =>{
  console.log("error:", err)
})

const db = {};
//logic for every models.
fs.readdirSync(__dirname)
  .filter(file => {
    return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
// require every model
db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;

