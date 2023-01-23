// arrow 
let arrfunction = (x,y) => {
    return [x,y,x+y]
};

// basic/normal function
function arrfunctions (x,y){
    return [x,y,x*y]
};

// anonymous
let annfunction = () => {
    return "Annonymous"
}

let arr = [1,2,3,4,5,6,7]

arr.map((value, key) => {
    console.log(value)
})

arr.forEach((value, key) => {
    console.log(key)
})



console.log(arrfunction(1,2))
console.log(arrfunctions(1,2))
console.log(annfunction())

