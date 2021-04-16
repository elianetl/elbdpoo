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
},

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