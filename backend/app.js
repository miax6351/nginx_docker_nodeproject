const helmet = require("helmet");
const models = require("./app/models");
const express = require("express");
const cors = require("cors");




const app = express();

models.sequelize.sync({force: false}).then(() => {
    console.log("yes, sync works");
   })

//middelware
app.use(cors())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
}) 

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
  res.json({ message: "Welcome to StudentHub" });
});


//app.use(helmet());
//announcements
app.use("/api/announcements", require("./app/routes/announcement"));
//lessonplan
app.use("/api/lessonplan", require("./app/routes/lessonplan"));
app.use("/api/lessonplan/postLessonplanRow", require("./app/routes/lessonplan"));
//appointment
app.use("/api/appointment", require("./app/routes/appointment"));
app.use("/api/appointment/postAppointment", require("./app/routes/appointment"));
//courseDatabase
app.use("/api/courseDatabase", require("./app/routes/course"));
//student
app.use("/api/student", require("./app/routes/student"));
//grades
app.use("/api/grade", require("./app/routes/grade"));

module.exports = app;