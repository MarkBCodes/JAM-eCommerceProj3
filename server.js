const express = require("express");
const path = require("path");
const routes = require("./routes/api/index");
const app = express();
const bodyParser = require("body-parser");
const db = require("./models");
const PORT = process.env.PORT || 3001;
const cors = require("cors");
// handles post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.options("*", cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

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
db.sequelize
  .sync(syncOptions)
  .then(function() {
    app.listen(PORT, function() {
      console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
  })
  .catch(err => {
    console.log(err);
  });

module.exports = app;
