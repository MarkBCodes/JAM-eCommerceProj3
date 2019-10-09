const mysql = require("mysql");
const Schema = mysql.Schema;

const productSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Schema = mysql.model("jam_db", productSchema);

module.exports = Schema;
