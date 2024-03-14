const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const TuristsPlaces = db.define("places", {
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
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  idCity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
})

module.exports = TuristsPlaces;