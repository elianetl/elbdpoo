const Comenta = require("../model/comenta")

var comenta = {

    create: async function (objeto){
try{
    let comen = await comenta.create(objeto);
    console.log(comen);
    }
catch(e){
    throw new error (name = "Erro ao adicionar o objeto ")
    console.log(e.name)
  }
}
,
        let: async function (){
 try{
    let comen = await comenta.findAll();

        console.log(comen);
        }
        catch (e){
    throw new error (name= "Erro ao ler o objeto ");
console.log(e.name);
}
}
,

    atualizar: async function (novo_nome, id){
try{
const coment = await comenta.findByPk(id);
        await coment.update({nome:`${novo_nome}`});
    }
catch (e){
     throw new error (name = "Erro para atualizar o objeto ")
     console.log(e.name)
}
}
,
    deletar: async function (id){
try{
        const object = await comenta.findByPk(id);
        let comen = await object.destroy();
        console.log(comen);
}
catch (e){
 throw new error (name = "Erro ao deletar o objeto ")
 console.log(e.name)
      }
   }
}

module.exports = comenta;