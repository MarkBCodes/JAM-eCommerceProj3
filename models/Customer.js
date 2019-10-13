const db = require("../database/db");

module.exports = function(sequelize, DataTypes) {
  return sequelize.define("customers", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    contact: {
      type: DataTypes.STRING
    }
  });
};
