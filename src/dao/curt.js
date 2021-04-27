const Curte = require("../model/curte")

var curte = {

  create: async function (object){
    let c = await curte.create(object);
    console.log(c);
  }
  ,
  read: async function (){
     let r = await curte.findAll();
     console.log(r);
  }
  ,
  update: async function (novonome, id){
    const u = await curte.findByPk(Id);
    await u.update({nome:`${novonome}`});
  }
  ,
  deletar: async function (id){
         const d = await curte.findByPk(id);
         let del = await d.destroy();
         console.log(del);
     }
}

module.exports = curte;