/* Paradigma Functional Programming
adalah paradigmapemrograman dimana proses komputasi didasarkan pada fungsi
murni matematika.
4 konsep besar yang ada di FP. Yakni Pure Function, Immutability, Recursive, dan High-Order Function.
*/

//Code Imperatif
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
const newNamesWithExcMark = [];
for(let i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}!`);
}
console.log(newNamesWithExcMark);

/* output:
   [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
*/


//CODE DEKLARATIF
const namesD = ['Harry', 'Ron', 'Jeff', 'Thomas'];
const newNamesWithExcMarkD = names.map((name) => `${name}!`);
console.log(newNamesWithExcMarkD);
/* output:
 * [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 */