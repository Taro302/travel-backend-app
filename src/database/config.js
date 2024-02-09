const { Sequelize } = require("sequelize");

let db;

if (process.env.NODE_ENV === 'production') {
  db = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
  });
} else {
  db = new Sequelize({
      dialect: process.env.DB_DIALECT,
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      logging: false,
  })

}


module.exports = { db }