const db = require("../database/db");

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "apparelproducts",
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
        type: DataTypes.BOOLEAN
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
