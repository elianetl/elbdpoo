let Sequelize = require("sequelize");

let conexaodb = new Sequelize("postgres://vdxkttpacysbtu:b98bc6b458aac5590662854bd38acb10ac9b2cfacf3fc2cdb8db62916f72ef0f@ec2-54-167-168-52.compute-1.amazonaws.com:5432/d16c6kerm1l0gu", {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    }
  }
});

module.exports= conexaodb;
