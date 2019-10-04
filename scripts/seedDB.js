const mysql = require("mysql");
const db = require("../models");

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

require("./routes/hmtl-routes")(app, connection);

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
