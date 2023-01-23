/*
Array some
array.some()
merupakan fungsi bawaan dari array yang cukup sering digunakan. Fungi ini akan menghasilkan
nilai boolean 

arr.some(callback(elements,[index],[array]),[thisArgs])

nilai yang dihasilkan pada pernyataan apakah ada setidaknya 1 dari deretan nilai dalam array
tersebut lolos berdasarkan kriteria yang kita tuliskan dalam callback function
*/
const array = [1,2,3,4,5];
const even = array.some(element=>element%2===0);    
console.log(even)