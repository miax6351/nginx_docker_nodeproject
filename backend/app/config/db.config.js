module.exports = {
  HOST: "mariadb",
  USER: "root",
  PASSWORD: "root",
  DB: "studenthub",
  DIALECT: "mysql",
  PORT: 3306,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
