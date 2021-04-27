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


var publicacao = {

    create: async function (objeto){
try{
    let pub = await publicacao.create(objeto);
    console.log(pub);
    }
catch(e){
    throw new error (name = "Erro ao adicionar o objeto ")
    console.log(e.name)
  }
}
,
        let: async function (){
 try{
    let pub = await publicacao.findAll();

        console.log(pub);
        }
        catch (e){
    throw new error (name = "Erro ao ler o objeto ");
console.log(e.name);
}
}
,

    atualizar: async function (novo_nome, id){
try{
const person = await publicacao.findByPk(id);
        await person.update({nome:`${novo_nome}`});
    }
catch (e){
     throw new error (name = "Erro para atualizar o objeto ")
     console.log(e.name)
}
}
,
    deletar: async function (id){
try{
        const object = await publicacao.findByPk(id);
        let pub = await object.destroy();
        console.log(pub);
}
catch (e){
 throw new error (name = "Erro ao deletar o objeto ")
 console.log(e.name)
      }
   }
}