/*
Di JavaScript sudah terdapat built-in class atau class bawaan, seperti Date, Object, Array, Math, dan String.
 Class bawaan dapat kita manfaatkan untuk berbagai hal, mulai dari manipulasi data-data terkait dengan array, 
 operasi matematika, manipulasi karakter, ataupun manipulasi objek.
*/

/* 
1. Date
Date merupakan class bawaan JavaScript yang digunakan untuk utilitas terkait tanggal dan waktu. 
Class ini sangat membantu ketika program yang kita buat terdapat penggunaan dan manipulasi tanggal dan waktu.
Kita bisa mudah untuk mendapatkan waktu dalam bentuk instance Date atau mengonversinya ke dalam berbagai
 format yang kita inginkan.
*/
const date = new Date();
const timeInJakarta = date.toLocaleString('id-ID',{timeZone : 'Asia/Jakarta',});
const timeInJakarta1 = date.toDateString('id-ID',{timeZone : 'Asia/Jakarta',});
const timeInTokyo = date.toDateString('ja-JP',{timeZone : 'Asia/Tokyo',});
const timeInTokyo1 = date.toLocaleString('ja-JP',{timeZone : 'Asia/Tokyo',});

console.log(timeInJakarta);
console.log(timeInJakarta1);
console.log(timeInTokyo);
console.log(timeInTokyo1);


/*
Mari kita berbicara tentang class bawaan lain, yang menjadi salah satu favorite kami adalah Array.
Dengan class Array, kita bisa membuat struktur data dalam bentuk array.
*/
const myArray = new Array('a', 'b', 'c', 'a', 'b', 'c');
console.log(myArray); // ['a', 'b', 'c', 'a', 'b', 'c']

class UniqueArray extends Array{
    constructor(...args){
        //make sure args is unique before passing it  to super
        const uniqueValue = args.filter((item, index)=>args.indexOf(item)===index);

        super(...uniqueValue);
    }
    add(item){
        // make sure only unique item is added
        if(!this.includes(item)){
            super.push(item);
        }
    }
}

const someArray = new UniqueArray('a','b','c','a','b','c');
console.log(someArray); // ['a','b','c'];
someArray.add('d');
console.log(someArray);// ['a','b','c','d']

