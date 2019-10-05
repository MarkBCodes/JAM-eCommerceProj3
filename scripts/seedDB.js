const mysql = require("mysql");
const db = require("../models");
const express = require("express");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "jam_db"
});

connection.connect(function(err) {
  err
    ? console.log(err + "+++++++++++++++//////////")
    : console.log("connection********");
});

require("./routes/api")(app, connection);
