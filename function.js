/*  Funtion 
ada :
1. Regular function = fungsi yang biasa dibuat 
function nama_funtion(){
    return `hi mate` ; 
    bukan tipe void  
} 
*/

// // Tipe Void Mengembailkan Value
// function sayHello(){
//     return ` Hi mate (bukan Void)`
// }
// console.log (sayHello());


// Tipe void = tidak mengembalikan value
// function sayHello(){
//     console.log (` Hi mate (Tipe Void)`)
// }
// sayHello();


/* Call Back Function
yaitu fungsi yang jadi parameter*/

function starEngine(){
    console.log(`Engine star. . .`);}
// function goCar(){
//     console.log(`Mobil Berjalan`);
// }
// function stopCar(){
//     console.log(`Mobil Berhenti`);
// }
// function shutDownEngine(){
//     console.log(`Mesin Mobil dimatikan`);
// }

// function chageGear(gear){
//     console.log(`masukan gigi ${gear} to move a car`);
// };

// function driveCar(callBackFunction){
//     callBackFunction();
//     chageGear(1);
//     // starEngine();
//     // goCar();
//     // stopCar();
//     // shutDownEngine();
// }

// driveCar(chageGear)


// ARROW Function
//  starEngine= ()=>{
//         console.log(`Engine star. . .`);}
    
    // function add1(x,y){
    //     return x+y;
    // }
    // console.log(add1(5,10))

    // const add2 =()=>{
    //     return x+y;
    // }
    // console.log(add3(1,10))

    // const add3 = (x,y)=> x+y;
    // console.log(add3(4,2))

    //  const driveCar= (callBackFunction)=>{
//     callBackFunction();
//     chageGear(1);
//     // starEngine();
//     // goCar();
//     // stopCar();
//     // shutDownEngine();
// }


// Anonymous function

// (function (){});

// let show= function(){
//     console.log(`Anonymous function`);
// };
// show();

// set (function(){
//     console.log(`Execute later after 1 second`)
// }, 1000);

// function(){
//     console.log(`Imediatelty invoked funtion execution`);
// }

// let person ={
//     firtsname: `Muhammad Ilmi`,
//     lastname: `Alimudin`
// };

// (function (obj){
//     console.log(obj.firtsname + ` `+ obj.lastname);
// })(person);

// function driveCarTimeOut(callBackFunction){
//     setTimeout(()=>{
//         callBackFunction()
//     },1000);
//     setTimeout(()=>{
//         starEngine()
//     },1000);
// }

// driveCarTimeOut(starEngine);