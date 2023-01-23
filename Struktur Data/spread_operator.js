// “spread”, fitur ini digunakan untuk menyebarkan nilai array atau lebih tepatnya iterable object menjadi beberapa elemen. 
// Spread operator dituliskan dengan tiga titik (...).

// Spread operator bekerja seperti meleburkan nilai array 
// menjadi beberapa elemen sesuai panjang nilai array-nya


const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
//menampilkan array biasa
console.log(favorites);
/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup' ]
*/

const favorites1 = ["Seafood", "Salad", "Nugget", "Soup"];
// menampilkan dan meleburkan array
console.log(...favorites);
/* output
Seafood Salad Nugget Soup
*/

//menggabungkan 2 array biasa. akan tetap menjadi 2 array
const favorites2 = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];
const allFavorites = [favorites2, others];
console.log(allFavorites);
/* output
[
  [ 'Seafood', 'Salad', 'Nugget', 'Soup' ],
  [ 'Cake', 'Pie', 'Donut' ]
]
*/

//menggabungkan 2 array menjadi aaray baru
const favorites3 = ["Seafood", "Salad", "Nugget", "Soup"];
const others3 = ["Cake", "Pie", "Donut"];
const allFavorites3 = [...favorites3, ...others3];
console.log(allFavorites3);
/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/