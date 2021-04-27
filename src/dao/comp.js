const Compoe = require("../model/compoe")

var compoe = {

  create: async function (object){
    let c = await compoe.create(object);
    console.log(c);
  }
  ,
  read: async function (){
     let r = await compoe.findAll();
     console.log(r);
  }
  ,
  update: async function (novonome, id){
    const u = await compoe.findByPk(Id);
    await u.update({nome:`${novonome}`});
  }
  ,
  deletar: async function (id){
         const d = await compoe.findByPk(id);
         let del = await d.destroy();
         console.log(del);
     }
}

module.exports = compoe;