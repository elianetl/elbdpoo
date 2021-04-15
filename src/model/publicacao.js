let {Sequelize, DataTypes} = require("sequelize");
let db = require("../connection");

const publicacao = db.define("Publicação",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nomeusuario : {
            type: DataTypes.STRING,
            allowNull: false
        },
        legenda: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        localizacao: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hora: {
           type: DataTypes.INTEGER,
            allowNull: false,
        },
        data: {
          type: DataTypes.Data,
          allowNull:false,
        },
    }
);

module.exports = publicacao; 