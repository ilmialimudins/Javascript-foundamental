
/*
object blueprint dapat dibuat dengan menggunakan constructor function 
yang tampak seperti ini.
*/

function Car(brand, color, maxSpeed, chassisNumber){
    this.brand =brand;
    this.color=color;
    this.maxSpeedm=maxSpeed;
    this.chassisNumber=chassisNumber;
}
Car.prototype.drive = function(){
    console.log(`${ this.brand}, ${this.color},
    is driving`);
}
Car.prototype.reverse= function(){
    console.log(`${this.brand},${this.color} is reversing`);
}
Car.prototype.run=function(){
    console.log(`${this.brand},${this.color}is running`);
}

//Membuat objek mobil dengan constuctor function car
const car1= new Car('Toyota','Silver','200','to-1');
const car2= new Car('Honda','Black','180','ho-1');
const car3= new Car('Suzuki','Red','220','su-1');

car1.drive();
car2.drive();
car3.drive();

/*
    Penamaan fungsi yang merupakan constructor function, secara konvensi harus
ditulis dengan huruf kapital. Itulah alasan kami memberi nama fungsi
tersebut Car, bukan car. Hal ini penting untuk Anda ikuti guna membedakan
fungsi biasa dengan constructor function karena penggunaannya berbeda.
Constructor function dapat memanfaatkan keywordthis yang bernilai objek
(instance) dirinya sendiri. Keywordthis dapat dimanfaatkan untuk mengakses
nilai properti atau method dari objek tersebut. Contoh, kami menggunakan
keyword this untuk menetapkan nilai properti brand dari argumen fungsi.
Selain itu, di dalam method drive, kami juga menggunakan this untuk 
mendapatkan nilai properti brand dan color.
Constructor function memiliki internal property bernama prototype. 
Properti ini digunakan untuk mendefinisikan method-method yang akan 
dimiliki oleh objek yang dibuat. Alasan method perlu didefinisikan di 
dalam prototype agar mudah untuk diwarisi ketika melakukan pewarisan.
Terakhir, agar fungsi mengembalikan sebuah objek, Anda harus memanggilnya
dengan menambahkan keyword new. Contoh, pada kode di atas, perhatikan
cara kami memanggil fungsi Car untuk membuat objek car1, car2, dan car3.
*/