function User(nama,email,alamat,acktive,age){
    this.nama = nama,
    this.email = email,
    this.alamat = alamat,
    this.acktive = acktive,
    this.age = age
}
 let objArray=[
    new User('ilmi','muhamad.ilmi86@gmail.com','Bekasi',true,'25'),
    new User('zack','zack.ilmi86@gmail.com','Bekasi',true,'25'),
    new User('Ken','Ken.ilmi86@gmail.com','Bekasi',true,'25'),
    new User('Ryu','Ryu.ilmi86@gmail.com','Bekasi',true,'25'),
 ]
 
//  console.log(objArray[3]);


//  Menampilkan semua isi objek array (for)
for(let i=0; i<objArray.length; i++){
    console.log(objArray[i]);
}

//  Menampilkan semua isi objek array (for...of)
for(const obj of objArray){
    console.log(obj);
    for(key in obj ){
        if()
    }
}


//  Menampilkan semua isi objek array (foreach)
objArray.forEach(function(obj)){
    console.log(obj)
}
