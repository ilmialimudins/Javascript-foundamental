
// Throw
//  melempar kalimat error dengan custom sendiri

// if(typeof x !== `number`){
//     throw ` the first argument must be a number`;
// }if (typeof y !==`number`){
//     throw `The second arguments must be a number`;
// }
// return x+y;

// const result=aa(`a`,10);
// console.log(result);

function add(x,y){
    if(typeof x !== `number`){
        throw new Error(`the first argument must be a number`);
    }if (typeof y !==`number`){
        throw new Error(`The second arguments must be a number`);
    }
    return x+y;   
} try {
    const result= add(`a`,10);
    console.log(result);
}catch (e){
    console.log(e.name, `:`, e.message);
}