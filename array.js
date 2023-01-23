
let arrayList=[];
for(let i=2; i<20; i+=2){
    arrayList.push(i);
}
console.log(arrayList);
arrayList.pop();

console.log(arrayList);
let hasil = '';

for( let e of arrayList){
    hasil+=(e)+ ' '
}
console.log(hasil);

// arrayList.forEach(e => {
//     hasil+=(e)+ ' '})

// arrayList.map(arr=>{
//     hasil+=(e)+ ' '
// })

    
// });