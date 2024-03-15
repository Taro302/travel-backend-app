const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const TuristsPlaces = db.define("placess", {
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
  idDepartament: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
})

module.exports = TuristsPlaces;