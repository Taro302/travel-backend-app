const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const Post = db.define("posts", {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  id_place: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  img_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  }
})

module.exports = Post;