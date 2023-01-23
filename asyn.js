
const getNomorAntri=(nomor)=>{
    return new Promise((resolve ,reject)=>{
        setTimeout(()=>{
            resolve(nomor);
            },1000);
    });
};

const pilihPaket = (nomor,paket)=>{
    return new Promise((resolve ,reject)=>{
    let msg = ''
    if(nomor<=0 && !(isNaN(nomor))){
        return 'Silahkan antri'
    }
    else{
     if(paket ==='A'){
        msg= 'KFC Paket A'
    }else {
        msg='KFC Paket B'
    }
}
        setTimeout(()=>{
        resolve(msg);
    },1000)
})
}

const tagihan =(paket)=>{
   return new Promise((resolve ,reject)=>{
    let harga= 0
    if(paket==='A'){
        harga=25000;
    }else {
        harga=24000;
    }setTimeout(()=>{
       resolve (harga);
    },1000)
   
    })
}

// getNomorAntri(5);
// pilihPaket(10,'A');
// tagihan('A');

const orderKFC = async (paket)=>{
    const NomorAntri=await getNomorAntri(10);
    const menu=await pilihPaket(NomorAntri,paket);
    const total =await tagihan(menu);
    return [NomorAntri,menu,total];
};
orderKFC('A').then(res=>console.log(res)).catch(err=>console.log(err));