/* 
Arrow function mirip seperti regular function secara perilaku, 
tetapi berbeda dalam penulisannya. Sesuai namanya, 
fungsi didefinisikan menggunakan tanda panah atau fat arrow ( => ). 
Selain perbedaan sintaksis, terdapat perbedaan perilaku antara 
arrow function dan regular function. 
Regular function dapat berupa function declaration dan function expression. 
Namun, arrow function hanya berupa expression function saja. 
Itu sebabnya arrow function memiliki nama lengkap “arrow function expression”.
*/

//Regular Function 
// 1.function declaration
function sayHello(greet) {
    console.log(`${greet}!`);
}
// 2. function expression
const sayName = function (name) {
    console.log(`Nama saya ${name}`)
}

//Kita ubah ke Arrow Funtion

//ARROW FUNTION
// function expression
const sayHello = (greet) => {
    console.log(`${greet}!`)
}
const sayNama = (name) => {
    console.log(`Nama saya ${name}`)
}
/*
 Pada arrow function kita tidak perlu menuliskan keyword function setiap membuat fungsi.
 Kita tetap menuliskan parameter di dalam tanda kurung 
 lalu diikuti dengan tanda panah (=>) sebelum kurung kurawal.
 */

 /*Apabila fungsi hanya memiliki satu parameter, 
 maka kita bisa menghapuskan tanda kurung seperti berikut:
 */
 const sayNamee = name => {
    console.log(`Nama saya ${name}`)
}
sayNamee("Leia");
/* output
Nama saya Leia
 */

/*
Namun, jika kita sama sekali tidak membutuhkan parameter, 
maka kita tetap menuliskan tanda kurung namun kosong seperti ini:
*/
const sayHello = () => {
    console.log("Selamat pagi semuanya!")
};
sayHello();

/*
Satu hal yang menarik, ketika body dari function hanya terdiri dari satu baris,
kita bisa menghapus tanda kurung kurawal. Tentun ini akan menghemat baris kode yang ditulis.
*/
const sayName1 = name => console.log(`Nama saya ${name}`);
sayName("Leia");

const sayHello = () => console.log("Selamat pagi semuanya!");
sayHello();

/*
Ketika sebuah fungsi perlu mengembalikan nilai, kita tidak perlu lagi menuliskan return
 (hanya bekerja untuk fungsi satu baris).
*/
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));
/* output
12
 */