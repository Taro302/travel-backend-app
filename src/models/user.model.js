const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const User = db.define("users", {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstLastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  secondLastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imgUrl: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'https://firebasestorage.googleapis.com/v0/b/restaurant-58ad4.appspot.com/o/users%2Favatar.png?alt=media&token=5c12e730-e951-4b1e-a7c5-77aeae52614e'
  },
  status: {
    type: DataTypes.ENUM("enabled", "disabled"),
    allowNull: false,
    defaultValue: "enabled",
  }
})

module.exports = User;