/*
    Immutable berarti sebuah objek tidak boleh diubah setelah  tersebut dibuat.
    konsepnya sangat kental denga functional programming.

*/

const user = {

    firstName :'Muhammad',
    lastName: ' Ilme' //misalnya salah typo
}

const createUserWithLastName = (newLastName, user)=>{
    return {...user, lastName:newLastName}
}

const  newUser =  createUserWithLastName('ilmi', user);
console.log(newUser);