const Posta = require("../model/posta")

var posta = {

    create: async function (objeto){
try{
    let pos = await posta.create(objeto);
    console.log(pos);
    }
catch(e){
    throw new error (name = "Erro ao adicionar o objeto ")
    console.log(e.name)
  }
}
,
        let: async function (){
 try{
    let pos = await posta.findAll();

        console.log(pos);
        }
        catch (e){
    throw new error (name= "Erro ao ler o objeto ");
console.log(e.name);
}
}
,

    atualizar: async function (novo_nome, id){
try{
const post = await posta.findByPk(id);
        await post.update({nome:`${novo_nome}`});
    }
catch (e){
     throw new error (name = "Erro para atualizar o objeto ")
     console.log(e.name)
}
}
,
    deletar: async function (id){
try{
        const object = await posta.findByPk(id);
        let pos = await object.destroy();
        console.log(pos);
}
catch (e){
 throw new error (name = "Erro ao deletar o objeto ")
 console.log(e.name)
      }
   }
}

module.exports = posta;