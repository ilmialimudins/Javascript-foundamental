
const foods= ["sup"," pizza","pasta"]
const numbers= [2,4,6,8]

const students=[
    {nama:"cpde",
    nama:"academy"}
]

foods.push("cake"); // push menambahkan di list belakang
foods.unshift("donut") //unshift menambahkan di list depan

foods.pop()         // menghapus dari list belakang
foods.shift()       // menghapus dari list depan


for( )
foods.forEach(e=>console.log(e))

console.log(foods);