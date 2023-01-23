/*
Suatu fungsi yang dapat mengakses variabel di dalam lexical scope-nya disebut dengan 
closure. Lexical scope berarti pada sebuah fungsi bersarang, 
fungsi yang berada di dalam memiliki akses ke variabel di lingkup induknya.
*/

function init() {
    var name = 'Obi Wan';   // Variabel lokal di dalam scope fungsi init
    
    function greet() {      // Inner function, merupakan contoh closure
        console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan di parent function
    }

    greet();
}
init();

/* output
Halo, Obi Wan
 */

/*
Fungsi init() memiliki variabel lokal name dan fungsi greet(). 
Fungsi greet() adalah inner function yang didefinisikan di dalam init() 
dan hanya bisa diakses dari dalam fungsi init(). Perhatikan bahwa fungsi greet() 
tidak memiliki variabel lokal. Namun, karena inner function memiliki akses ke variabel 
di parent function-nya, sehingga greet() dapat mengakses variabel name. 
Itulah yang dimaksud dengan lexical scope.
*/

function init() {
    var name = 'Obi Wan';

    function greet() {
        console.log(`Halo, ${name}`);
    }

    return greet;
}
let myFunction = init();
myFunction();

/*
Kode di atas akan menghasilkan output yang sama. 
Perbedaannya adalah fungsi greet() dikembalikan (return) dari outer function-nya
sebelum dieksekusi. Karena variabel name berada dalam scope init(),
maka umumnya variabel tersebut akan hilang atau dihapus ketika fungsinya selesai 
dijalankan. Namun, pada kasus di atas fungsi greet() yang diakses 
melalui fungsi MyFunction() masih memiliki referensi atau akses ke variabel name. 
Variabel pada mekanisme di atas telah tertutup (close covered),
 yang berarti variabel tersebut berada di dalam closure.
 */

 let counter = 0;

let add = () => {
    return ++counter;
}

console.log(add());
console.log(add());
counter = 23;
console.log(add());

/* output
1
2
24
 */

/*
Nilai counter akan bertambah ketika kita memanggil fungsi add(). 
Namun, kita juga bisa mengubah nilai counter secara langsung dengan assignment operator.
 Pada contoh program yang lebih kompleks, sebaiknya hal ini dihindari 
 karena perubahan langsung pada nilai counter bisa saja memunculkan bug.
*/

//Use it
let add1 = () => {
    let counter = 0;
    return () => {
        return ++counter;
    };
}

let addCounter = add1();

console.log(addCounter());
console.log(addCounter());
counter = 23;
console.log(addCounter());

/* output
1
2
3
 */