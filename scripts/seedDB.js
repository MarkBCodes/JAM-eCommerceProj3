const mysql = require("mysql");
const db = require("../models");

// This file empties the Books collection and inserts the books below
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: ""
});

connection.connect(err => {
  err
    ? console.log(err + "+++++++++++++++//////////")
    : console.log("connection********");
});

require("./routes/html-routes")(app, connection);

// db.Book
//   .remove({})
//   .then(() => db.Book.collection.insertMany(bookSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
