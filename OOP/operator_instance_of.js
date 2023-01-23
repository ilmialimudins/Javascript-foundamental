/*
Ketika menulis kode, kita seringkali kita perlu mengecek jenis dari objek
 tersebut. Salah satu cara mengetahui jenis objek adalah dengan mengecek
  rantai prototype-nya. Nah, untuk mengetes sebuah objek berdasarkan
   prototype dari constructor function atau class tertentu, kita bisa
    menggunakan operator instanceof.
*/

const whatsapp = new WhatsAppService('+6281234567890');
 
console.log(whatsapp instanceof WhatsAppService); // true
console.log(whatsapp instanceof EmailService); //false

/*
Operator instanceof mengembalikan boolean. Operasinya akan menghasilkan 
nilai true jika objek yang dites (operand pertama) memiliki prototype yang
 merupakan operand kedua. Jika prototype operand pertama bukanlah operand 
 kedua, operasinya akan menghasilkan nilai false.


*/