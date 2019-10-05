const mysql = require("mysql");
const db = require("../models");
const express = require("express");

// This file empties the Books collection and inserts the books below
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "jam_db"
});

connection.connect(err => {
  err
    ? console.log(err + "+++++++++++++++//////////")
    : console.log("connection********");
});

require("./routes/api")(app, connection);
