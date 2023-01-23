/*
Array sort
array.sort() merupakan fungsi bawaan dari array yang berguna untuk melakukan 
pengurutan nilai dari sebuah deretan nilai. Secara default, 
fungsi sort akan mengubah semua nilai dalam deretan menjadi bentuk string 
dan mengurutkannya secara ascending.

rumus: 
arr.sort([compareFunction])
*/

const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// output: [ 'Dec', 'Feb', 'Jan', 'March' ]

const array1= [1,30,4,1000,101,121];
array1.sort();
console.log(array1);
// output: [ 1, 1000, 101, 121, 30, 4 ]

const compareNumber=(a,b)=>{
        return  a-b;
}
const sorting = array1.sort(compareNumber);
console.log(sorting);
