const Posta = require("../model/posta")

var posta = {

  create: async function (object){
    let c = await posta.create(object);
    console.log(ass);
  }
  ,
  ler:async function (objet){
    let r = await posta.findAll();
    console.log(ass);
  }
  ,
   atualizar: async function (novonome, id){

        const u = await posta.findByPk(id);
        await u.update({nome:`${novonome}`});
    }
,
    deletar: async function (id){
        const d = await posta.findByPk(id);
        let del = await object.destroy();
        console.log(del);
}
}

module.exports = posta;