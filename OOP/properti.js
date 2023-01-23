/*
Properti merupakan bagian dari class yang mendefinisikan nilai-nilai yang
terkandung dalam sebuah instance class.
Adakalanya nilai properi juga bisa didefinikan d dalam class itu sendiri
contoh nya kita tidak ingin pengguna menentukan nomor rangka mobil secara
mandiri, maka kita bisa memberi nilai propeti langsung didalam funsi
constructor */

class Car {
    constructor(brand, color, maxSpeed) {
      //Properti dari instance
        this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      // Set a random chassis number
      this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
    }}

    /*
    Ada dua tipe Properti yaitu : 
    1. data property dan 
    2 .accessor property  

Data properti merupakan properti yang sejauh ini kita lihat, properti yang
langsung menampung sebuah nilai di dalam sebuah objek.

Accesor Properti 
merupakan properti yang dikontrol oleh sebuah getter dan setter.
Nilai yang didapatkan dari properti tersebut di kontrol oleh method get dan
cara menetapkan nilai tersebut dikontrol oleh methode set.
*/
class User {
    constructor(firstName, lastName) {
     this.firstName = firstName;
     this.lastName = lastName;
   }

   get fullName(){
    return `${this.firstName},${this.lastName}`;
   }

   set fullName(fullName){
    const[firstName,lastName]= fullName.split(' ');
    this.firstName=firstName;
    this.lastName=lastName
   }   
}   
const user =new User(`John`,'Doe');
console.log(user);
console.log(user.fullName);

user.fullName='Muhammad Ilmi';
console.log(user);
console.log(user.fullName);

/*
Catatan penting yang perlu Anda ketahui mengenai getter setter adalah:
method getter harus mengembalikan sebuah nilai dan nilai tersebut akan
menjadi nilai properti;

method setter harus menerima satu argumen yang nilainya diambil dari 
operand ke dua ketika melakukan assignment operator.
*/

class Car {
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
    }
   
    get chassisNumber() {
      return this._chassisNumber;
    }
   
    set chassisNumber(chassisNumber) {
      console.log('you are not allowed to change the chassis number');
    }
  }
   
  const car = new Car('BMW', 'red', 200);
  console.log(car.chassisNumber);
  car.chassisNumber = 'BMW-1';
  console.log(car.chassisNumber);
   
  /* Output:
  BMW-232
  you are not allowed to change the chassis number
  BMW-232
  */