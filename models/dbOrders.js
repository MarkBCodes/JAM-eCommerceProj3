const db = require("../database/db");

module.exports = db.sequelize.define("home-and-garden", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  product_Id: {
    type: DataTypes.INTEGER
  },
  Product_name: {
    type: DataTypes.STRING
  },
  Customer_Id: {
    type: DataTypes.INTEGER
  }
});
