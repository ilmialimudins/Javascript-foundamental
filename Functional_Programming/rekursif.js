/*
Rekursif meruapakan teknik pada sebuah function yang memanggil dirinya sendiri
*/

const coutdown = star=>{
    console.log(star);
    if(star>0) coutdown(star-1);
}
coutdown(10);
