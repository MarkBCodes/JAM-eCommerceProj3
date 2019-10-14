const db = require("../database/db");

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "jewelry",
    {
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
        type: DataTypes.STRING
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
    },
    {
      timestamps: false
    }
  );
};
