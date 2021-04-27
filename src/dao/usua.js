const Usuario = require("../model/usuario")

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

module.exports = usuario;