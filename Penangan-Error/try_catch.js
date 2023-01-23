/*
Taruh kode yang berpeluang menimbulkan eror di dalam blok try.
 Apabila terjadi eror di dalam blok kode try, maka ia akan ditangkap dan 
 ditangani oleh blok kode catch. Sementara, jika tidak terjadi eror pada kode,
maka blok catch akan diabaikan.
*/

try {
     // kode
     console.log("Awal blok try");
    console.log("Akhir blok try");
} catch (error) {
      // error handling
      console.log("Tidak terjadi eror, maka kode ini diabaikan");
}

/*
Kode di dalam blok try di atas tidak akan menghasilkan eror, 
sehingga kode di dalam blok catch akan diabaikan dan tidak dijalankan. 
Berikut ini adalah contoh kode yang menghasilkan eror:
*/
try {
    console.log("Awal blok try");   // (1)
    errorCode;                      // (2)
    console.log("Akhir blok try");  // (3)
} catch (error) {
    console.log("Terjadi error!");  // (4)
}
/*
Baris kode (2) akan menghasilkan eror. Eksekusi kode di dalam blok try akan dihentikan,
sehingga baris kode (3) tidak akan tereksekusi. Kemudian kode akan dilanjutkan
ke baris (4) atau blok catch.
Selamat! Anda telah berhasil menangani eror dan menghindarkan aplikasi dari crash
(Cobalah untuk menghapus sintaks try-catch dan melihat bagaimana aplikasi akan crash).
Namun, bagaimana kita bisa tahu apa yang menyebabkan suatu program mengalami eror? 
Jika ada informasi yang jelas tentunya akan sangat membantu kita atau pengguna 
nantinya bukan?
Sekarang perhatikan blok catch. Di sana catch memiliki satu parameter bernama error
(nama variabel bisa diubah). Variabel error tersebut merupakan sebuah object yang 
menyimpan detail informasi dari error yang terjadi.
*/

try {
    console.log("Awal blok try");   // (1)
    errorCode;                      // (2)
    console.log("Akhir blok try");  // (3)
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

/*
Object error memiliki beberapa properti utama di dalamnya, yaitu:

name : Nama error yang terjadi.
message : Pesan tentang detail error.
stack : Informasi urutan kejadian yang menyebabkan error.
Umumnya digunakan untuk debugging karena terdapat informasi baris mana yang 
menyebabkan error.
*/

/*
Try-Catch-Finally
Selain try dan catch, ada satu blok lagi yang ada dalam mekanisme error handling pada
JavaScript, yaitu finally. Blok finally akan tetap dijalankan tanpa peduli apa pun 
hasil yang terjadi pada blok try-catch.
*/

try {
    console.log("Awal blok try");
    console.log("Akhir blok try");
} catch (error) {
    console.log("Baris ini diabaikan");
} finally {
    console.log("Akan tetap dieksekusi");
}
 
/* output
Awal blok try
Akhir blok try
Akan tetap dieksekusi
*/