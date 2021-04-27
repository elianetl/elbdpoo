const Curte = require("../model/curte")

var curte = {

    create: async function (objeto){
try{
    let c = await curte.create(objeto);
    console.log(c);
    }
catch(e){
    throw new error (name = "Erro ao adicionar o objeto ")
    console.log(e.name)
  }
}
,
        let: async function (){
 try{
    let c = await curte.findAll();

        console.log(c);
        }
        catch (e){
    throw new error (name= "Erro ao ler o objeto ");
console.log(e.name);
}
}
,

    atualizar: async function (novo_nome, id){
try{
const like = await curte.findByPk(id);
        await like.update({nome:`${novo_nome}`});
    }
catch (e){
     throw new error (name = "Erro para atualizar o objeto ")
     console.log(e.name)
}
}
,
    deletar: async function (id){
try{
        const object = await curte.findByPk(id);
        let c = await object.destroy();
        console.log(c);
}
catch (e){
 throw new error (name = "Erro ao deletar o objeto ")
 console.log(e.name)
      }
   }
}

module.exports = curte;