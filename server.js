const express = require("express");
//const path = require("path");
const routes = require("./routes");
const app = express();
const bodyParser = require("body-parser");
const db = require("./models");
const PORT = process.env.PORT || 3001;

// handles post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client"));
}
// Add routes, both API and view
app.use(routes);

const syncOptions = { force: false, alter: true };

// Starting server, syncing models
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});

module.exports = app;
