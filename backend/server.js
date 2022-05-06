const app = require("./app");
const { version } = require("./package.json");

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`app started: ${version} Server is running on port ${PORT}.`);
});


