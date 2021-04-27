let {Sequelize, DataTypes} = require("sequelize");
let db = require("../connection");

const usuario = db.define("Usuário",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ocupacao: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        data_de_nascimento: {
            type: DataTypes.Data,
            allowNull: false,
        },
        email: {
           type: DataTypes.STRING,
            allowNull: false,
        },
        telefone: {
          type: DataTypes.INTEGER,
          allowNull:false,
        },
    }
);

module.exports = usuario; 

var usuario = {

    create: async function (objeto){
try{
    let usu = await usuario.create(objeto);
    console.log(usu);
    }
catch(e){
    throw new error (name = "Erro ao adicionar o objeto ")
    console.log(e.name)
  }
}
,
        let: async function (){
 try{
    let usu = await usuario.findAll();

        console.log(usu);
        }
        catch (e){
    throw new error (name = "Erro ao ler o objeto ");
console.log(e.name);
}
}
,

    atualizar: async function (novo_nome, id){
try{
const person = await usuario.findByPk(id);
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
        const object = await usuario.findByPk(id);
        let usu = await object.destroy();
        console.log(usu);
}
catch (e){
 throw new error (name = "Erro ao deletar o objeto ")
 console.log(e.name)
      }
   }
}