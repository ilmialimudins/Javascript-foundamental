/*
Member visibility biasa  disebut juga sebagai hak akses pada sebuah properti dan method didalam class.
secara default properti besrsifat public.
cara agar bersifat public adala meggunakan # pada awal nama property agar bersifat private.
*/

class Car {
    #chassisNumber = null; // enclosing class
   
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this.#chassisNumber = this.#generateChassisNumber();
   }
   
    get chassisNumber() {
      return this.#chassisNumber;
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
   
    #generateChassisNumber() {
      return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
    }
  }
  
  
  /*
  Dengan begitu, properti dan method yang sifatnya private tidak dapat diakses di luar dari cakupan kode class,
   misalnya via instance. 
   */