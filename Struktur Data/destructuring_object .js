// Iterasi object dan array adalah dua hal yang paling banyak digunakan 
// dalam mengelola data di JavaScript.

[
    {
        "id": 14,
        "title": "Belajar Fundamental Aplikasi Android",
        "author": "Google ATP"
    },
    {
        "id": 51,
        "title": "Belajar Membuat Aplikasi Android untuk Pemula",
        "author": "Google ATP"
    },
    {
        "id": 123,
        "title": "Belajar Dasar Pemrograman Web",
        "author": "Dicoding Indonesia"
    },
    {
        "id": 163,
        "title": "Belajar Fundamental Front-End Web Development",
        "author": "Dicoding Indonesia"
    }
]

//Dectrucing biasa
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
const firstName = profile.firstName
const lastName = profile.lastName
const age = profile.age
console.log(firstName, lastName, age)

//New Destrucing
const profile1 = {
    firstName1: "John",
    lastName1: "Doe",
    age1: 18
}
//cukup 1 baris 
const {firstName1, lastName1, age1} = profile;
console.log(firstName, lastName, age);
 
