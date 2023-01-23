function user(nama, email){
    this.nama = nama,
    this.email = email
}

function contact(noHp, alamat){
    this.noHp = noHp,
    this.alamat= alamat
}


// console.log(objectUser)
// console.log(objectContact)
function insertUser (){
return new Promise((resolve, reject) => {    
    let objectUser=[]
    let user1 = Object.assign({},new user())
    let user2 = Object.assign({},new user())
    
    user1.nama = 'naruto'
    user1.email='j@3'
    
    user2.nama = 'sakura'
    user2.email='S@3'
    objectUser.push(user1, user2)
    setTimeout(()=>{
        resolve (objectUser)
    },6000)
})
    
}
// console.log(insertUser())

function insertContact(){
    return new Promise((resolve, reject) => {
    let objectContact=[]
    let contact1 = Object.assign({},new contact())
    let contact2 = Object.assign({},new contact())

    contact1.noHp ='123'
    contact1.alamat='abcfd'
    
    contact2.noHp ='234' 
    contact2.alamat='bdsdsf'

    objectContact.push(contact1, contact2 )
    setTimeout(()=>{
        resolve(objectContact)
    },1000)
})
}
// console.log(insertContact())

const add= async()=>{
   const addUser = await insertUser()
   const addContact = await insertContact()
   return [addUser, addContact]
}
add().then(res=> console.log(res))
// step
/* 
fungsi insert objk 1
fungsi insert objk 2
panggil await tanpa set time out
tambah promise
tambah set time out

*/



