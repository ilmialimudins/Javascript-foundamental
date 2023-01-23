// let = {name:"yoda",
// age:20}
// ;
// try  {
//    let user= JSON.parse(json);
//      console.log(user.name);
//      console.log(user.age);
// }catch (error){
//     console.log(error.name);
//     console.log(error.message);
// }
/*
Pada kode di atas, fungsi JSON.parse akan melakukan parsing atau konversi dari
 variabel json (String) menjadi sebuah object. Skenario seperti di atas akan 
 banyak kita temui ketika melakukan request ke API.
*/

// let json = '{ "age": 20 }';
 
// try {
//     let user = JSON.parse(json);
 
//     console.log(user.name); // undefined
//     console.log(user.age);  // 20
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }
 
 
/* output
SyntaxError
Unexpected token b in JSON at position 2
*/

/*
Secara sintaksis, kode di atas tidak menimbulkan eror, sehingga blok catch akan
diabaikan. Namun, tidak adanya properti name pada json sebenarnya sama saja dengan
eror karena akan berdampak pada jalannya program kita.
Untuk mengatasinya, kita bisa menggunakan throw. Operator ini akan “melemparkan” eror
 pada program, sehingga eksekusi kode akan masuk pada blok catch. 
 Berikut ini adalah contoh mengimplementasikan throw untuk menimbulkan eror
  kita sendiri:
*/

// let json1 = '{ "age": 20 }';
 
// try {
//     let user = JSON.parse(json1);
 
//     if (!user.name) {
//         throw new SyntaxError("'name' is required.");
//     }
 
//     console.log(user.name); // undefined
//     console.log(user.age);  // 20
// } catch (error) {
//     console.log(`JSON Error: ${error.message}`);
// }
 
/* output
JSON Error: 'name' is required.
*/

/*
Sekarang anggaplah json sudah sesuai, tetapi ternyata ada eror lain yang terjadi,
 misalnya karena variabel yang belum terdefinisi.
*/

let json2={name:"ilmi",age:25};
try{
    let user = JSON.parse(json2);
    if(!user.name){
        throw new SyntaxError(`'name' is required`);
    }
    errorCode;
    console.log(user.name);
    console.log(user.age);
}catch(error){
    console.log(`JSON Error : ${error.message}`);
}

/*
Eror berhasil ditangani, tetapi konsol tetap menampilkan pesan “JSON Error”,
 lantas bagaimana kita bisa menampilkan pesan eror sesuai eror yang muncul?
 Jawabannya adalah dengan if statement.
*/

try {
    let user = JSON.parse(json2);
    if(!user.name){
        throw new SyntaxError(`'name' is required`);
    }
    errorCode;
    console.log(user.name);
    console.log(user.age);

} catch (error) {
    if(error instanceof SyntaxError){
        console.log(`JSON : ${error.message}`);
    }else if( error instanceof ReferenceError){
        console.log (error.message)
    }else{
        console.log(error.stack);
    }
}
/*
Dengan operator instanceOf, kita bisa mendapatkan tipe dari eror yang terjadi. 
Dari sana kita bisa membuat percabangan bagaimana cara menangani erornya.
*/