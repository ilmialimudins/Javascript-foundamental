/* Destructuring array serupa dengan destructuring object. 
Object menggunakan tanda kurung kurawal { } 
sedangkan array menggunakan tanda kurung siku [ ]. 
Perbedaan lainnya adalah destructuring array bekerja berdasarkan posisi 
daripada penamaan propertinya.
*/
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
//menagmbil nilai ke 3
const [, , thirdFood1 ] = favorites;
 

