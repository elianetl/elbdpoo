const Comenta = require("../model/comenta")

var comenta = {

    create: async function (object){
        let c = await comenta.create(object);
        console.log(c);
    }
    ,
    read: async function (){
     let r = await comenta.findAll();
     console.log(r);
    }
    ,
    update: async function (novonome, id){
        const u = await comenta.findByPk(Id);
        await u.update({nome:`${novonome}`});
    }
    ,
     deletar: async function (id){
         const d = await comenta.findByPk(id);
         let del = await d.destroy();
         console.log(del);
     }
}

module.exports = comenta;