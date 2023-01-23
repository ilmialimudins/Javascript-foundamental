/*
Object-oriented programming atau disingkat OOP 
merupakan paradigma pemrograman yang banyak diterapkan ketika
 membangun aplikasi. Paradigma OOP kental dengan konsep objek 
 yang mengandung dua hal, yaitu atribut dan method. Selain itu, 
 OOP juga kental dengan konsep object blueprint yang akrab dikenal 
 dengan sebutan class.
 Di OOP, objek merupakan sebuah entitas yang terdiri dari dua hal, yakni properties dan methods.

Properti merupakan nilai di dalam objek yang menyimpan informasi
    tentang objek tersebut.
Method merupakan fungsi yang menggambarkan aksi yang dapat dilakukan 
    oleh objek tersebut.
 */

    const car = {
  // properties
  brand: 'Ford',
  color: 'red',
  maxSpeed: 200,
  chassisNumber: 'f-1',
  // methods
  drive: () => {
    console.log('driving');
  },
  reverse: () => {
    console.log('reversing');
  },
  turn: () => {
    console.log('turning');
  }
}
 
console.log(car.brand); // Ford
console.log(car.color); // red
console.log(car.maxSpeed); // 200
console.log(car.chassisNumber); // f-1
car.drive(); // driving
car.reverse(); // reversing
car.turn(); // turning