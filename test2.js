
const insert= (nama, nim)=>{
    let hasil=[]
    hasil.push(nama, nim)
    return hasil
}


const tambah=(matkul, krs)=>{
    let a=[]
    a.push(matkul, krs)
    return a
}

const krs=(nama, nim)=>{
    const mhs = insert('dim', '1234')
    const ab = tambah('a',12)
}
krs('dim', '1234').then(res=> console.log(res))