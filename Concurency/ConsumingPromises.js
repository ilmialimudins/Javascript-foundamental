// Consuming Promises
// Setelah mengetahui bagaimana membuat objek Promise, hal yang tentunya sangat penting adalah tahu bagaimana mengonsumsinya. Seperti yang telah kita bahas sebelumnya, status awal dari Promise adalah pending. Kemudian, akan ada dua kemungkinan yang terjadi, fulfilled atau rejected.

// Untuk menangani hasil dari Promise, kita gunakan method .then(). Jika kita terjemahkan, “then” berarti “kemudian”, sehingga kurang lebih kita memerintahkan JavaScript seperti ini: “Jika janji saya sudah selesai, kemudian lakukan ...”. Jika dituliskan dalam bentuk kode akan seperti berikut:

const myPromise = new Promise(executorFunction);
myPromise.then(onFullfilled, onRejected);
// .then() sendiri adalah sebuah higher-order function yang membutuhkan dua parameter. Keduanya adalah callback function yang juga dikenal sebagai handler. Handler pertama adalah fungsi yang akan dijalankan ketika Promise berstatus resolve. Sedangkan handler kedua adalah fungsi yang akan dijalankan ketika Promise berstatus reject.

// Kembali ke kasus mesin kopi kita sebelumnya, mesin bisa gagal membuat kopi jika bahan-bahan tidak mencukupi. Sementara jika bahan cukup, mesin akan membuatkan satu gelas kopi. Di sinilah kita dapat memanfaatkan Promise sekaligus menangani dua kemungkinan promise yang terjadi.

// Mari kita buat object untuk menyimpan stok dan fungsi yang mengembalikan objek Promise.

const stock1 = {
    coffeeBeans: 250,
    water: 1000,
}
 
const checkStock1 = () => {
    return new Promise((resolve, reject) => {
        if (stock.coffeeBeans >= 16 && stock.water >= 250) {
            resolve("Stok cukup. Bisa membuat kopi");
        } else {
            reject("Stok tidak cukup");
        }
    });
};
// Kemudian di bawahnya kita tambahkan dua fungsi untuk menangani masing-masing status resolve dan reject.

const handleSuccess1 = resolvedValue => {
    console.log(resolvedValue);
}
 
const handleFailure1 = rejectionReason => {
    console.log(rejectionReason);
}
// Terakhir panggil method .then() pada checkStock() untuk menangani hasil yang dikembalikan dari promise.

checkStock().then(handleSuccess, handleFailure);
// Sehingga, keseluruhan kode akan menjadi seperti ini:

const stock = {
    coffeeBeans: 250,
    water: 1000,
}
 
const checkStock = () => {
    return new Promise((resolve, reject) => {
        if (stock.coffeeBeans >= 16 && stock.water >= 250) {
            resolve("Stok cukup. Bisa membuat kopi");
        } else {
            reject("Stok tidak cukup");
        }
    });
};
 
const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
}
 
const handleFailure = rejectionReason => {
    console.log(rejectionReason);
}
 
checkStock().then(handleSuccess, handleFailure);
// Mari kita bedah kode di atas:

// checkStock() merupakan fungsi yang mengembalikan promise dan akan menghasilkan resolve() dengan membawa nilai “Stok cukup. Bisa membuat kopi”.
// Lalu kita mendeklarasikan fungsi handleSuccess() dan handleFailure() yang mencetak nilai dari parameternya.
// Kemudian kita memanggil method .then() dari checkStock. Isi parameter then() dengan dua fungsi handler yang telah kita buat sebelumnya.
// Parameter pertama berisi fungsi handleSuccess untuk menangani kondisi ketika promise berstatus resolve. Parameter kedua berisi fungsi handleFailure yang menangani ketika promise berstatus reject.
// Cobalah untuk mengubah nilai stock dan memastikan fungsi handleFailure telah dijalankan.