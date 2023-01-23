/*
Rest parameter juga dituliskan menggunakan three consecutive dots (...). 
Dengan rest parameter, kita dapat menggabungkan beberapa elemen menjadi satu array. 
Tentu teknik ini sangat bermanfaat ketika kita hendak membuat sebuah fungsi 
dengan parameter yang tidak pasti.
*/

// paramter menggunakan consecutive dots (...)
function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}
console.log(sum(1, 2, 3, 4, -5));

/* output
15
*/