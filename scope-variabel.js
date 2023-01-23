var message ='hi';

function say(){
    var message ='hello';
    console.log(message);
}
say();
console.log(message);

let x =10;
if(x==10){
    let x=20;
    console.log(x);
};
console.log(x);

var y=20;

function bar(){
    var y =200;

    function baz(){
        console.log(y);
    }
    baz();
}
bar();
console.log(y);
// contoh error
// const nama ={
//     fname:'dim',
//     lname: 'yoga'
// }

// nama ={
//     fname:'dimas',
//     lname:'setya'
// }
// console.log(nama)