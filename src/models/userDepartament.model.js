const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const UserDepartament = db.define("userDepartament", {
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
  },
  status: {
    type: DataTypes.ENUM("enabled","disabled"),
    allowNull: true,
    defaultValue: "disabled",
  }
})

module.exports = UserDepartament;