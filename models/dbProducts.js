const db = require("../database/db");

module.exports = db.sequelize.define("home-and-garden", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING
  },
  size: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.DOUBLE
  }
});
