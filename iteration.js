// let  ranks = ['A','B','C'];



// for (let [index, rank] of ranks.entries()){
//     console.log(`${rank} is at index ${rank}`);
// }



const userObject= [
     { 
        name:`Ilmi`,
        email:`muhamad.ilmi86@gmail.com`,
        age:23,
        active:true,
    },
    {
        name:`Faqih`,
        email:`muhamad.ilmi86@gmail.com`,
        age:25,
        active:true
     },
     { 
        name:`Pangestu`,
        email:`muhamad.ilmi86@gmail.com`,
        age:23,
        active:true,
    },
    {
        name:`Dimas`,
        email:`muhamad.ilmi86@gmail.com`,
        age:25,
        active:true
     },
    {
        name:`Dani`,
        email:`muhamad.ilmi86@gmail.com`,
        age:25,
        active:true
     }

]

for(const u of userObject){
    // console.log(`${u.name}`);
    tmp=[];
    for(const war in u){
        console.log(war + ':' +u[war]);
        
    
}

}
// for(const key )



// for(const key in user){
//     console.log(`${key}:${user[key]}`);

// }

// let users = [user,user2]

