// let user =[{
//     nama :'roy',
//     email:'r33@gmail.com',
//     almt: 'aaa',
//     active : true
// }]

// for (const key in user) {
//     console.log(user[key])
// }
// // push ke array
//  let data=[]
// for (const key in user) {
//     data.push(user[key])
// }
// console.log(data)
// // edit dan tambah objek
// // user.nama='adam'
// // user.age=23
// // console.log(user)

// let userb =user
// userb.nama = 'jul'
// userb.email='j@3'
// userb.almt ='w'
// userb.age=20
// console.log(user)

function users(nama, email, alamat, active, age){
    this.nama =nama,
    this.email=email,
    this.alamat =alamat,
    this.active =active,
    this.age =age
}
let objUser=[]
let user1 =Object.assign({}, new users())
let user2 =Object.assign({}, new users())

user1.nama = 'jul'
user1.email='j@3'
user1.alamat ='w'
user1.active =true
user1.age=20

user2.nama = 'ari'
user2.email='j@3'
user2.alamat ='w'
user2.active =true
user2.age=20

objUser.push(user1, user2)
console.log(objUser)

for (const iterator of objUser) {
    // console.log("object"+ JSON.stringify(iterator))
    // console.log(iterator.nama)
    for( k in iterator){
        if (k =='nama') {
            console.log(iterator[k])
        }
    }
}