const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const City = db.define("City", {
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
    type : DataTypes.STRING,
    allowNull : false,
  },
  idDepartament: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
})

module.exports = City;