let Sequelize = require("sequelize");

let conexaodb = new Sequelize("", {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    }
  }
});

module.exports= conexaodb;
