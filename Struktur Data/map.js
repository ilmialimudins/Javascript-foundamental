// Map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object. 
// Yang membedakan adalah Map memperbolehkan key dengan tipe data apa pun,
// dibandingkan Object yang hanya mengizinkan key bertipe String atau Symbol

const myMap = new Map();

const myMap1 = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]
]);

const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]); 
//Menamilkan ukuran map
console.log(capital.size);
//Menampilkan isi dari properti 'london' menggunakan .get
console.log(capital.get("London"));
// menambahkan properti dan value baru
capital.set("New Delhi", "India");
console.log(capital.size);

console.log(capital.get("New Delhi"));