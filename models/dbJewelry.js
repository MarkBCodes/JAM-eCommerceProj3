const db = require("../database/db");

module.exports = db.sequelize.define("jewelry", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING
  },
  img: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.DOUBLE
  },
  size: {
    type: DataTypes.STRING
  },
  productDetails: {
    type: DataTypes.STRING
  },
  inStock: {
    type: DataTypes.STRING
  },
  count: {
    type: DataTypes.INTEGER
  },
  total: {
    type: DataTypes.INTEGER
  }
});
