// Untuk menetapkan objek pada sebuah variabel kita gunakan tanda kurung kurawal {}.
const user = {};

// Key dan value di dalam object dituliskan seperti berikut:
let object = {key1: "value1", key2: "value2", key3: "value3"}

const user1 = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
};

// Membuat dan 
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};
// Mengubah Nilai Value
spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;

//Menghapus property
delete spaceship.manufacturer;
//Menampilkan
console.log(spaceship);
