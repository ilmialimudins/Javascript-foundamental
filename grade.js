// GRADE
// 90-100 =A
// 80-89 = B
// 70-79 = C 
// 60-69 = D 
// 50-59 = E
// <50= 'invalid Grade'

/*
let rl= require('readline-sync');
let number=parseInt(rl.question(`Masukan Nilai : `))
console.log(`Nilai, ${number}`)

if ( number>=90){
    console.log('Nilai A : Selamat Anda Lulus')
}else if (number<=89 && number>=80){
    console.log('Nilai B : Selamat Anda Lulus')
}else if (number<=79 && number>=70){
    console.log(`Nilai C : Selamat Anda Lulus`)
}else if(number<=69 && number>=50){
    console.log(`Nilai D : Maaf Anda Remedial`)
}
else if(number<=59 && number90>=50)
{
console.log(`E`)
}else{
    console.log ('Invalid Grade (Gagal Test)')
}
*/ 

switch(number){
    case number>=90:
    console.log('Nilai A : Selamat Anda Lulus');
    break;
    case number>=90:
    console.log('Nilai B : Selamat Anda Lulus');
    break;
    case number>=90:
    console.log('Nilai C : Selamat Anda Lulus');
    break;
    case number>=90:
    console.log('Nilai D : Selamat Anda Lulus');
    break;
    default:
    console.log('Nilai E : Selamat Anda Lulus');
    break;
}