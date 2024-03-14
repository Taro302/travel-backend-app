const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const Celebration = db.define("celebrations", {
  id: {
    primaryKey: true,
    type : DataTypes.INTEGER,
    allownull : false,
    autoIncrement : true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.TIME,
    allowNull: false,
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

module.exports = Celebration;