
// Primitive Type
const s = 'hello'
console.log(typeof s);
const result = true;
console.log(typeof result);
const nullvar = null;
console.log(typeof nullvar);
let blank;
console.log(typeof blank);

// Non Primitive Type

// 1. Array
const arr=[1,2,3]
console.log(typeof arr);
// object
const obj ={
    nama: 'Ilmi',
    ipk: 32.5
}
console.log(typeof obj);
const fnc=function (){
    return 'Hello'
}
console.log(typeof  fnc);
const tgl = new Date();
console.log(typeof tgl);
const x = Symbol()
console.log(typeof x);