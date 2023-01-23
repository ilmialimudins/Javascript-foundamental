/*
Fungsi pada JavaScript tidak melakukan pengecekan terhadap jumlah maupun tipe argumen
yang dimasukkan ke dalam parameter. Ini berarti kita bisa memasukkan argumen 
meskipun tidak sesuai dengan parameter yang telah didefinisikan.
*/

function exponentsFormula(baseNumber, exponent) {
    let result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}
exponentsFormula(2);
/* output
2^undefined = NaN
*/

/*
Seperti yang kita lihat pada contoh kode di atas, ketika argumen lebih sedikit 
dari parameternya, maka parameter yang tidak terdefinisi akan bernilai undefined. 
Sebagai solusi jika memungkinkan, kita bisa memberikan nilai default pada parameter
*/

//parameter 1 default, parameter 2 diberi nilai . maka argumen cukup 1 parameter
function exponentsFormula(baseNumber, exponent = 2) {
    let result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}
exponentsFormula(3);
/* output
3^2 = 9
*/


