const path = require("path");
//require mysql to be used in node_modules
const mysql = require("mysql");

module.exports = function(app, connection) {
  // if no matching route is found, default to index.html
  app.get("/", function(req, res) {
    connection.query("");
  });
};

module.exports = router;
