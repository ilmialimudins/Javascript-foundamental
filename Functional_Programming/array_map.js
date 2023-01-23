//Reusable Funtion
// fungsi yang dapat digunakan berkali-kali tanpa khawatir mendapatkan hasil diluar ekspetasi.

// ARRAY MAP()
/*
    Fungsi array.map() 
    merupakan fungsi bawaan dari array yang sangat berguna dan banyak sekali digunakan.
    fungsi ini dapat dipanggil dari sebuah data bertipe array dan menerima 1 buah call back function
*/
['ilmi','faqih','rifki'].map(()=>{}); //callback function akan dipanggil sebanyak jumlah panjang array dan
                                    // akan meemiliki akses pada index sesuai dengan iterasinya.

/*
 fungsi map akan mengembalikan array baru. Nilai tiap item pada array yang dikembalikan,
  dihasilkan dari kembalian callback function-nya. Karena callback function dapat mengakses item array,
   biasanya developer menggunakannya untuk menghasilkan nilai baru.
*/
const newArray = ['ilmi','faqih','rifki'].map((name)=>{return `${name}!`});
console.log(newArray);



