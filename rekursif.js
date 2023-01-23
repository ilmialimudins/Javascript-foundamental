/* REKURSIF
Function yang memanggil dirinya sendiri 
*/

// function countDown(fromNumber){
//     console.log(fromNumber);
//     countDown(fromNumber-1);
// }
// countDown(3)

// function countDown(fromNumber){
//     console.log(fromNumber);

//     let nextNumber = fromNumber -1;
//     if(nextNumber >0){

//     } 
// }


     let str = ''
function increment(fromNumber){
  str += String.fromCharCode(fromNumber) + ' '
  
  let nextNumber = fromNumber + 1

  if(nextNumber < 123){
    increment(nextNumber)
  }
}
increment(97)
console.log(str);

let nextNumber = 0
function genap(number) {
  nextNumber ++
  if(nextNumber <= number){
    nextNumber%2 == 0 ? console.log(nextNumber) : console.log('')
    genap(number)
  }
}

genap(100)