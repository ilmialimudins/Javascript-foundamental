/*
Fungsi dalam pemrograman juga digunakan untuk menghasilkan output berdasarkan input 
tertentu.  fungsi juga bisa digunakan sebagai blok kode atau prosedur yang dapat 
digunakan secara berulang.
 */

// Parameter merupakan variabel yang didefinisikan sebagai inputan dari sebuah fungsi.
function multiply(a, b) {
    return a * b;
}
// Argument merupakan nilai atau expression yang dimasukkan ke dalam fungsi
multiply(3, 4);

//tanpa parameter
function greeting1() {
    console.log("Good Morning!")
}
greeting1();

function greeting(name, language) {
    if(language === "English") {
        console.log(`Good Morning ${name}!`);
    } else if (language === "French") {
        console.log(`Bonjour ${name}!`);
    } else {
        console.log(`Selamat Pagi ${name}!`);
    }
}
greeting("Ilmi", );

//Funtion dimasukan ke var baru
function multiply(a, b) {
    return a * b;
}
let result = multiply(10, 2)
console.log(result)
