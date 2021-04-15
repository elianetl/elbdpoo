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
}
