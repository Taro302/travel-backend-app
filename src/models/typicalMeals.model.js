const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const TypicalMeals = db.define("typicalMealss", {
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
  idDepartament: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
})

module.exports = TypicalMeals;