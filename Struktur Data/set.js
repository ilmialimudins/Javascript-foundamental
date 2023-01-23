/*Set sederhananya merupakan kumpulan nilai (set of values). 
Hal yang membedakan Set dengan struktur data yang lain 
adalah data pada Set tidak berurutan dan juga tidak diindeks. 
Selain itu, data di dalam Set juga bersifat unik dan tidak ada duplikasi. */

const numberSet = new Set([1, 4, 6, 4, 1]);
console.log(numberSet);
/*
Pada kode di atas terdapat beberapa angka yang duplikat, yaitu angka 1 dan 4. 
Secara otomatis Set akan membuang angka yang sama, 
sehingga nilai yang tersimpan adalah {1, 4, 6}. 
*/

//Menambahkan nilai
numberSet.add(5);

//Menghapus nilai
numberSet.delete(4);
/*
Ingat bahwa Set tidak memiliki urutan atau index, 
sehingga argumen yang dimasukkan ke dalam fungsi delete adalah nilai yang ingin dihapus,
 bukan index-nya.
 */