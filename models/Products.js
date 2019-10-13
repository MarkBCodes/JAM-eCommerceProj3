const db = require("../database/db");

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "products",
    {
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
        type: DataTypes.STRING
      }
    },
    {
      timestamps: false
    }
  );
};
