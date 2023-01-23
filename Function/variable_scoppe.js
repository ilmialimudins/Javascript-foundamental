/*
Variabel yang dapat diakses dari seluruh script disebut dengan “globally scoped”, 
Variabel yang hanya diakses hanya pada fungsi tertentu disebut dengan “locally scoped”.
Jika variabel didefinisikan di luar fungsi, maka variabel tersebut bersifat global. 
Jika variabel didefinisikan di dalam fungsi, maka variabel bersifat lokal dan cakupannya hanya pada fungsi tersebut beserta turunannya.
*/

// global variable, dapat diakses pada parent() dan child()
const a = 'a'; 
 
function parent() {
    // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses di luar dari fungsi tersebut.
    const b = 'b'; 
    
    function child() {
        // local variable, dapat diakses hanya pada fungsi child().
        const c = 'c';
    }
}

//Kita harus berhati-hati dalam mendefinisikan variabel di dalam fungsi.
// Pasalnya, kita bisa mendapatkan hasil yang tidak diperkirakan,

function multiply(num) {
    total = num * num;
    return total;
}
let total = 9;
let number  = multiply(20);
console.log(total)
/* output
400
*/

/*
Perlu kita perhatikan, jika kita lupa menuliskan keyword let, const, atau var 
pada script ketika membuat sebuah variabel, maka variabel tersebut akan menjadi global.
Sebisa mungkin kita harus menghindari pembuatan variabel global, 
karena variabel global dapat diakses pada seluruh script yang kita tuliskan. 
Semakin banyak variabel global yang kita tuliskan, 
semakin tinggi kemungkinan tabrakan (collision) terjadi.
*/
