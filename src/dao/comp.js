const Compoe = require("../model/compoe")

var compoe = {

    create: async function (objeto){
try{
    let com = await compoe.create(objeto);
    console.log(com);
    }
catch(e){
    throw new error (name = "Erro ao adicionar o objeto ")
    console.log(e.name)
  }
}
,
        let: async function (){
 try{
    let com = await compoe.findAll();

        console.log(com);
        }
        catch (e){
    throw new error (name= "Erro ao ler o objeto ");
console.log(e.name);
}
}
,

    atualizar: async function (novo_nome, id){
try{
const comp = await compoe.findByPk(id);
        await comp.update({nome:`${novo_nome}`});
    }
catch (e){
     throw new error (name = "Erro para atualizar o objeto ")
     console.log(e.name)
}
}
,
    deletar: async function (id){
try{
        const object = await compoe.findByPk(id);
        let com = await object.destroy();
        console.log(com);
}
catch (e){
 throw new error (name = "Erro ao deletar o objeto ")
 console.log(e.name)
      }
   }
}

module.exports = compoe;