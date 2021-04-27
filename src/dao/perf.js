const Perfil = require("../model/perfil")

var perfil = {

  create: async function (object){
    let c = await perfil.create(object);
    console.log(c);
  }
  ,
  read: async function (){
     let r = await perfil.findAll();
     console.log(r);
  }
  ,
  update: async function (novonome, id){
    const u = await perfil.findByPk(Id);
    await u.update({nome:`${novonome}`});
  }
  ,
  deletar: async function (id){
         const d = await perfil.findByPk(id);
         let del = await d.destroy();
         console.log(del);
     }
}

module.exports = perfil;