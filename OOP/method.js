/*
Method adalah sebuah fungsi yang berada didalam sebuah class dan dapat 
diakses melalui instance Class tersebut.
Method biasanya  mengidentifikasikan hal yang dapat dilakukan oleh sebuah
class.
Agar kode di dalam constructor lebih rapi, kita bisa membuat method
 yang digunakan internal yang menampung kode random tersebut.
  Biasanya method yang hanya digunakan secara internal disebut dengan 
  private dan namanya diawali dengan tanda underscore.
  */
  class Car {
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this._chassisNumber = this._generateChassisNumber();
    }
   
    get chassisNumber() {
      return this._chassisNumber;
    }
   
    set chassisNumber(chassisNumber) {
      console.log('you are not allowed to change the chassis number');
    }
   
    // Methods
    drive() {
      console.log(`${this.brand} ${this.color} is driving`);
    }
   
    reverse() {
      console.log(`${this.brand} ${this.color} is reversing`);
    }
   
    turn(direction) {
      console.log(`${this.brand} ${this.color} is turning ${direction}`);
    }
   
    _generateChassisNumber() {
      return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
    }
  }
  