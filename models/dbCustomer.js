const db = require("../database/db");

module.exports = db.sequelize.define("customers", {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  Email: {
    type: DataTypes.STRING
  },
  First_name: {
    type: DataTypes.STRING
  },
  Last_name: {
    type: DataTypes.STRING
  },
  Contact: {
    type: DataTypes.STRING
  }
});
