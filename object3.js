
let user = [{
    nama: 'Ilmi',
    email: 'muhamad.ilmi86@gmail.com',
    alamat: 'mustika grande',
    acktive: true
}]

console.log(user);

//Menambahkan ke array data
let data=[]
for (let e in user){
    data.push(user[e]);
}
console.log(data)

//menganti value
// user.nama= 'Muhammad Ilmi';

user.age = 25;

console.log(user);

let userBaru = user;

user1.nama= 'Ilm';
user1.email= 'Ilmi@gmail.com';
user1.alamat= 'Bekais';
user1.age= '25';
user1.acktive= 'True';
