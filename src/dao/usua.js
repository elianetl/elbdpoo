const Usuario = require("../model/usuario")

var usuario = {

    create: async function (objeto){
    let c = await usuario.create(objeto);
    console.log(a);
    }
,
    ler: async function (){
        let r = await usuario.findAll();
        console.log(a);
        }
        ,

    atualizar: async function (novonome, id){
        const u = await usuario.findByPk(id);
        await u.update({nome:`${novonome}`});
    }
,
    deletar: async function (id){
        const d = await usuario.findByPk(id);
        let del = await object.destroy();
        console.log(del);
}
}

module.exports = usuario;