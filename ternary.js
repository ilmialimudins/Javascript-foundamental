// Conditioon ? ExpressionIfTrue :  ExpressionIfFalse;

let age =18;
let message;

age >= 16 ?(message = `You can drive.`) : (message = `You cannot drive.`);
console.log(message);

// let locked=1;
// let canchange= locked!=1? true:false;

let speed =90;
let pesan = speed >= 120 ?`Too Fast`: speed >=80? `Fast`:`OK`;
console.log(pesan);