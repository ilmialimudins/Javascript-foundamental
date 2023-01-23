/*
Sintaks JavaScript modern (ES6) menawarkan cara membuat constructor
function dengan menggunakan keyword class. Hal ini membuat penerapan
OOP di JavaScript mirip seperti bahasa pemrograman berbasis class. 
*/

Sintaks JavaScript modern (ES6) menawarkan cara membuat constructor function dengan menggunakan keyword class. Hal ini membuat penerapan OOP di JavaScript mirip seperti bahasa pemrograman berbasis class. Kita bisa menulis constructor function Car dengan gaya class seperti ini.

class Car {
  constructor(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
  }
 
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }
 
  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }
 
  turn() {
    console.log(`${this.brand} ${this.color} is turning`);
  }
}
 
// Membuat objek mobil dengan constructor function Car
const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
const car2 = new Car('Honda', 'Black', 180, 'ho-1');
const car3 = new Car('Suzuki', 'Red', 220, 'su-1');
 
console.log(car1);
console.log(car2);
console.log(car3);
 
car1.drive();
car2.drive();
car3.drive();
 
/* Output
Car { brand: 'Toyota', color: 'Silver', maxSpeed: 200, chassisNumber: 'to-1' }
Car { brand: 'Honda', color: 'Black', maxSpeed: 180, chassisNumber: 'ho-1' }
Car { brand: 'Suzuki', color: 'Red', maxSpeed: 220, chassisNumber: 'su-1' }
 
Toyota Silver is driving
Honda Black is driving
Suzuki Red is driving
*/
