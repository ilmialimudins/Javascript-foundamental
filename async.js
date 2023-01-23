const getNomorAntri =(nomor)=>{
   return new Promise((resolve, reject) => {
        setTimeout(()=>{
          if (nomor>= 10 && !(isNaN(nomor))) {
             resolve(nomor)
          } else {
            reject(
                new Error('antrian habis')
            )
          }
        },6000)
    })   
}

const pilihPaket =(paket)=>{
   return new Promise((resolve, reject) => {
       let hsl
       if (paket ==='A') {
        hsl ='KFC A'
       }else{
        hsl ='KFC B'
       }
        setTimeout(()=>{
            resolve(hsl)
        },1000)
    })
}

const tagihan =(paket)=>{
   return new Promise((resolve, reject) => {
        let harga=''
        if(paket ==='A'){
            harga=25000
        }else{
            harga= 24000
        }
        setTimeout(()=>{
            // console.log(harga)
            resolve(harga)
        },1000)
    })
}

// getNomorAntri(5)
// pilihPaket(5, 'A')
// tagihan('A')
const orderKFC = async(paket)=>{
    const nomorAntri = await getNomorAntri(10)
    const menu = await pilihPaket('A')
    const total = await tagihan(menu)
    return [nomorAntri,menu,total]
}
orderKFC('A').then(res=> console.log(res))


// if (nomor  <= 10) {
//     resolve(nomor)
// }else{
//     reject('antrian habis')
// }