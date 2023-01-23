/*
Jest
Dalam penulisan kode pengujian, kita dapat menggunakan library tambahan untuk mempermudah penulisan kode pengujian.

Jest merupakan salah satu framework testing paling populer untuk menuliskan kode pengujian pada bahasa pemrograman JavaScript. Jest dapat digunakan untuk menuliskan script testing pada aplikasi backend maupun frontend.

Kita akan mencoba untuk menuliskan sebuah kode pengujian menggunakan framework jest.

Membuat proyek baru dengan direktori bernama latihantesting.
20210331110307c641f50e4b3de8cea43850ffb6d56899.jpeg
Setelah masuk ke direktori tersebut, kita dapat melakukan init project kita.
202103311103372a11cde892277fb59baa3d90a814f61b.jpeg
Setelah proyek tersebut diinisialisasi. Selanjutnya kita dapat melakukan instalasi library framework jest.
npm install --save-dev jest
Setelah proses instalasi selesai, buka proyek di code editor.
Pada file package.json, kita tambahkan script untuk test dengan cara menambahkan baris kode berikut:

*/
// {
//   "scripts": {
//     "test": "jest"
//   }
// }
// Penambahan script tersebut digunakan agar kita bisa menjalankan script test yang nanti kita buat menggunakan runner.