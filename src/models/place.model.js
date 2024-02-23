const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const Place = db.define("places", {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imgURL: {
    type: DataTypes.STRING,
    allowNull: true,
  }
})

module.exports = Place;