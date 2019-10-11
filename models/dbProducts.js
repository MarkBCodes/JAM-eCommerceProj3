const db = require("../database/db");

module.exports = db.sequelize.define("products", {
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
