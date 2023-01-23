// Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai 
// dan menempatkannya dalam satu variabel.
let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);

//menampilkan isi tertentu by indeks
console.log(myArray[1]);

//menambahkan isi ke belakang
myArray.push('JavaScript');
//menambahkan isi ke depan
myArray.shift('JavaScript');
//menghapus isi yang belakang
myArray.pop();
//menghapus isi didepan 
myArray.unshift();
//menghapus isi nilai
myArray.splice(2, 1);  
