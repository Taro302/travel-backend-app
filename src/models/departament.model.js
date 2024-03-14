const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const Departament = db.define("departament", {
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
  info: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  imgURL: {
    type: DataTypes.STRING,
    allowNull: true,
  }
})

module.exports = Departament;