// /*
// WeakMap merupakan varian dari Map yang mendukung garbage collection.
//  Garbage collection adalah proses di mana interpreter JavaScript mengambil kembali memori 
//  yang tidak lagi “dapat dijangkau” dan tidak dapat digunakan oleh program
//  */

//  //Map
// let visitsCountMap = new Map(); // Menyimpan daftar user
// function countUser(user) {
//     let count = visitsCountMap.get(user) || 0;
//     visitsCountMap.set(user, count + 1);
// }

// let jonas = { name: "Jonas" };
// countUser(jonas);                // Menambahkan user "Jonas"

// jonas = null;                    // Data object "Jonas" dihapus

// // delay dibutuhkan untuk menunggu garbage collector bekerja
// setTimeout(function() {
//    console.log(visitsCountMap);
// }, 10000)
// /* output
// Map(1) { { name: 'Jonas' } => 1 }
// */

// //Weak Map
// // const { inspect } = require('util');

// // let visitsCountMap = new WeakMap(); // Menyimpan daftar user

// // function countUser(user) {
// //     let count = visitsCountMap.get(user) || 0;
// //     visitsCountMap.set(user, count + 1);
// // }

// let jonas = { name: "Jonas" };
// countUser(jonas);                // Menambahkan user "Jonas"

// jonas = null;                    // Data object "Jonas" dihapus

// // delay dibutuhkan untuk menunggu garbage collector bekerja
// setTimeout(function() {
//   console.log(inspect(visitsCountMap, { showHidden: true }));
// }, 10000);

// /* output
//   WeakMap {  }
// */