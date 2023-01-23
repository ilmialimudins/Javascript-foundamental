/*
Array forEach merupakan fungsi bawaan dari array yang berfungsi untuk memanggil 
fungsi callback pada setiap iterasi index array. Berbeda dari fungsi array lain 
yang sudah kita bahas, fungsi ini tidak mengembalikan nilai apa pun. 
Jadi fungsi ini secara harfiah hanya berfungsi untuk memanggil fungsi callback-nya saja,
 tak lebih dari itu.

Melalui fungsi ini, Anda dapat mengubah sintaks perulangan berdasarkan jumlah array 
secara imperatif menjadi deklaratif.

*/

//cara Imperatif biasa
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
for (let i=0; i<names.length; i++){
    console.log(`Hello, ${names[i]}!`);
}


//Cara Deklaratif dengan Foreach
names.forEach((name)=>{console.log(`Hello, ${names}!`);});

/*
Namun, ketahuilah bahwa ketika menggunakan forEach, kita tidak bisa menggunakan 
operator break atau continue pada proses perulangan 
(Anda bisa melakukannya pada perulangan for). Hal ini juga berlaku ketika pada 
fungsi map dan filter.
*/

for(let i=0;i<names.length;i++){
    if(names[i]==='Jeff')continue;  //ini Bisa
    console.log(`Hello, ${names[i]}!`);

}

// names.forEach((name)=>{
//     if(name==='Jeff')continue;  //Tidak bisa
//     {
//         console.log(`Hello,${name}`)
//     }
// })
