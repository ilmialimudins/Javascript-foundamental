const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
console.log(favorites);

const favorites1 = ["Seafood", "Salad", "Nugget", "Soup"];
 
console.log(...favorites1);


const favorites2 = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [...favorites2, ...others];

console.log(allFavorites);

const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);