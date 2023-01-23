/*
Callback Function
Hal yang seringkali membingungkan ketika bekerja dengan program synchronous dan asynchronous adalah bagaimana menangani suatu nilai yang didapatkan secara asynchronous pada program yang berjalan secara synchronous
*/const orderCoffee = () => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
    }, 3000);
    return coffee;
}
 
const coffee = orderCoffee();
console.log(coffee);
/*
Jika kita melakukan hal seperti di atas untuk mencetak nilai coffee, maka hal tersebut tidak akan pernah terjadi. Seperti yang sudah kita ketahui, fungsi setTimeout() tidak akan menghentikan JavaScript untuk mengeksekusi kode yang ada selanjutnya. Jadi, fungsi orderCoffee() akan selalu mengembalikan nilai null, karena kode return coffee akan dieksekusi terlebih dulu dibandingkan dengan coffee = "Kopi sudah jadi!";. Kode asynchronous perlu disusun dengan cara yang berbeda dari synchronous. Cara paling dasar adalah dengan callback function.

Apa itu callback function? Mari kita bayangkan kembali ketika memesan kopi. Pada kasus ini mungkin terdapat dua aksi yang bisa kita lakukan:

(Synchronous) Kita tetap menunggu di kasir sampai kopi datang.
(Asynchronous) Kita menunggu di meja setelah memesan kopi. Selanjutnya kopi akan diantarkan oleh pelayan. Sehingga, kita tidak perlu menunggu di kasir dan dapat melakukan pekerjaan lain.
Nah, pada JavaScript, pelayan ini berperan layaknya callback function. Ia diperintahkan pada sebuah fungsi asynchronous kemudian akan dipanggil/digunakan ketika tugas itu selesai.

Bagaimana cara menerapkannya dalam kode? Pertama, kita tambahkan parameter dengan nama callback pada fungsi asynchronous.
*/

const orderCoffee2 = callback => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
    }, 3000);
    return coffee;
}

// Kemudian kita panggil atau gunakan callback yang diisikan dengan data yang akan dibawa (coffee) ketika task selesai dilakukan.

setTimeout(() => {
    coffee = "Kopi sudah jadi!";
    callback(coffee);
}, 3000);

// Setelah menggunakan callback, fungsi tidak perlu lagi mengembalikan nilai. Sehingga, kita bisa menghapus kode return coffee;. Keseluruhan fungsi akan tampak seperti ini:

const orderCoffee3 = callback => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
        callback(coffee);
    }, 3000);
}

// Kemudian untuk menggunakan fungsi orderCoffee, ubah kode dari:
const coffee3 = orderCoffee3();
console.log(coffee3);
// Menjadi:
orderCoffee3(coffee3 => {
    console.log(coffee3);
});
