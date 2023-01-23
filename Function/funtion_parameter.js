/*
Parameter dari fungsi dapat berupa tipe data apa pun, mulai dari string, number, object, 
bahkan fungsi lain.
Jika parameter dari fungsi adalah sebuah object, kita juga bisa memanfaatkan 
destructuring object untuk mendapatkan nilainya
*/

//object
const user = {
    id: 24,
    displayName: 'kren',
    fullName: 'Kylo Ren',
};
// function dengan parameter Object
function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`);
}

introduce(user);
