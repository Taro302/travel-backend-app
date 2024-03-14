const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const TypicalMeals = db.define("celebrations", {
  id: {
    type : DataTypes.INTEGER,
    primaryKey : true,
    allownull : false,
    autoIncrement : true,
  },
  name: {
    type : DataTypes.STRING,
    allownull : false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  imgURL:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  idCity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
})

module.exports = TypicalMeals;