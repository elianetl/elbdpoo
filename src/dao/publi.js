const Publicacao = require("../model/publicacao")

var publicacao = {

    create: async function (objeto){
        let c = await publicacao.create(objeto);
        console.log(access);
    }
    ,
    ler: async function (){
     let r = await publicacao.findAll();
     console.log(access);
    }
    ,
    atualizar: async function (novonome, id){
        const u = await publicacao.findByPk(Id);
        await u.update({nome:`${novonome}`});
    }
    ,
     deletar: async function (id){
         const d = await publicacao.findByPk(id);
         let del = await object.destroy();
         console.log(del);
     }
} 

module.exports = publicacao;