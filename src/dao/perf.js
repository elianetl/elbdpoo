const Perfil = require("../model/perfil")

var perfil = {

    create: async function (objeto){
try{
    let per = await perfil.create(objeto);
    console.log(per);
    }
catch(e){
    throw new error (name = "Erro ao adicionar o objeto ")
    console.log(e.name)
  }
}
,
        let: async function (){
 try{
    let per = await perfi.findAll();

        console.log(per);
        }
        catch (e){
    throw new error (name= "Erro ao ler o objeto ");
console.log(e.name);
}
}
,

    atualizar: async function (novo_nome, id){
try{
const person = await perfil.findByPk(id);
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
        const object = await perfil.findByPk(id);
        let per = await object.destroy();
        console.log(per);
}
catch (e){
 throw new error (name = "Erro ao deletar o objeto ")
 console.log(e.name)
      }
   }
}

module.exports = perfil;