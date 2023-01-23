const arr =['a', 'b', 'c']
console.log(arr[2])

let arrList=[]
for (let i = 2; i < 20; i+=2){
    arrList.push(i)
}
console.log(arrList)
arrList.pop()
console.log(arrList)

let hasil=''
for (const e of arrList) {
    // console.log(e)
    hasil+=(e+3)+' '
}
console.log(hasil)

// foreac
arrList.forEach(e=>{
    console.log(e)
})
// map
arrList.map(e=>{
    console.log(e)
})