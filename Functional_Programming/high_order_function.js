//HIGH_ORDER_FUNCTION
/*
Javascript memiliki kemampuan First Class Functions, karena itu fungsi pada JS dapat diperlakukan layaknya data. 
Kita dapat menyimpan function dalam variable, memberikan function sebagai parameter pada fungsi lainnya,
hingga mengembalikan fucntion di dalam fucntion.

Higger-Order Funtion menjadi bagian konsep pada paradigma FP.
Higger-Order Funtion merupakan fungsi yang dapat menerima fungi lainnya pada argumen;mengembalikan sebuah fungsi;
atau bahkan keduanya.

*/

//Function dalam variabel
const hello = ()=>{
    console.log('Helo');
};

//memberikan function sebagai parameter pada fungsi lainnya
const say =( someFunction)=>{
    someFunction();
}

// mengembalikan function di dalam fucntion
const sayHello=()=>{
    return ()=>{
        console.log('Helo!');
    }
}

hello();
say(hello);
sayHello()();

/**
 * Hello!
 * Hello!
 * Hello!
 */

/** 
Teknik High-Order Function biasa digunakan untuk:

*Mengabstraksi atau mengisolasi sebuah aksi, event, atau menangani alu asynchronus
menggunakan callback, promise dan lainnya.
*Membuat utilities yang dapat digunakan di berbagi tipe data.
*Membuat teknik currying atau function composition.

ARRAY MAP()
merupakan salah satu  contoh High-Order Function yang ada di javascript.
karena IA MENERIMA SATU BUAH ARGUMEN YANG MERUPAKAN SEBUAH FUNCTION.
*/

//array
const names =['Ilmi','faqih','rifki'];

//
const arrayMap=(arr, action)=>{
    const loopThrough =(arr, action, newArray=[], index=0)=>{
        const item=arr[index];
        if(!item) return newArray;
        return loopThrough(arr,action,[...newArray,action(arr[index])],index+1);
    }
    return loopThrough(arr,action);
}

const newNames = arrayMap(names,(name)=>`${name}!`);
console.log({
    names, newNames 
});

/**
 * output:
 * {
 *   names: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
 *   newNames: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 * }
 */