// let rank =['A', 'B', 'C']
// for (let i = 0; i < rank.length; i++) {
//     console.log(rank[i]+[i])
    
// }

// let color=['red', 'green', 'blue']
// for(const[index, color] of color.entries()){
//     console.log(`${color} is at indext ${index}`)
// }

// const user={
//     name:'dimas',
//     email: 'd12@gmail.com',
//     age:17,
//     dob:'12/04/2005',
//     active: true
// }
// for(const name in user){
//     console.log(`${name}: ${user[name]}`)
// }

// const user2 =[
//     {
//         name:'dimas',
//         email: 'd12@gmail.com',
//         age:17,
//         dob:'12/04/2005',
//         active: true
//     },
//     {
//         name:'ari',
//         email: 'd12@gmail.com',
//         age:17,
//         dob:'12/04/2005',
//         active: true
//     },
//     {
//         name:'riki',
//         email: 'd12@gmail.com',
//         age:17,
//         dob:'12/04/2005',
//         active: true
//     },
//     {
//         name:'ilmi',
//         email: 'd12@gmail.com',
//         age:17,
//         dob:'12/04/2005',
//         active: true
//     },
//     {
//         name:'dani',
//         email: 'd12@gmail.com',
//         age:17,
//         dob:'12/04/2005',
//         active: true
//     }
// ]
// for (let key of user2) {
//     console.log('nama : ' ,key.name)
//     for(let key2 in key){
//         console.log(key2, key[key2])
//     }
// }

// function segi3(a){
//     let hasil =""
//     for (let i = 0; i < a; i++) {
//         for (let j = 0; j < i; j++) {
//              hasil = I+j+" " +hasilcd
//         }
        
//     }
//     return hasil
// }
// console.log(segi3(5))

// let n = 6
// let concat =''
// let angka ='*'
// for (let i = 0; i <=n; i++) {
//     concat = concat.repeat(n-i) + angka.repeat(i)
//     console.log(concat)
//     concat=" "
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i+1)
//     if (i == 3) break;
// }

// for (let i = 0; i < 10; i++) {
//     if (i%2 == 1){
//         continue
//     }
//     console.log(i)
// }

// const foods = ["sup", "pizza", "pasta"]
// foods.push("ayam")
// foods.forEach(e => console.log(e))

// const number =[2,4,6,8]

// const student =[
//     {name: 'cone'},
//     {name: 'academi'}
// ]

// let n = 6
// let concat =' '
// let angka ='*'
// let tag ='#'
// for (let i = 1; i <=n; i++) {
//     if(i%2!=0){
//         concat = concat.repeat(0+i) + i
//         console.log(concat)
//         concat=" "
//     }
// }


// const diagonal = (n) => {
//   let str = ''
//   let hashtag = '#'
//   let star = '*'
//     for(let i = 1; i <= n; i++){
//       for(let j = 1; j <= n; j++){
//         if(i == j || j == (n - i+1)){
//           str += star
//         }else{
//           str += ' '
//         }
//       } 
//       str += '\n'
//     }
//     return str
//   }
  
//   console.log(diagonal(5))


// const diagonal = (n) => {
//     let str = ''
//     let hashtag = '#'
//     let star = '*'
//     for (let i = 1; i <= n; i++) {
//       for (let j = 1; j <= n; j++) {
//         if (i == j) {
//           str += star
//         } else {
//           str += ' '
//         }
//         if (j == (n - i+1)) {
//           str += hashtag
//         }
//       }
//       str += '\n'
//     }
//     return str
//   }
  
//   console.log(diagonal(8))

// const diagonal = (n) => {
//     let str = ''
//     let hashtag = '#'
//     let star = '*'
//     let i = 1
//     while(i <= n){
//       let j = 1
//       while(j <= n){
//         if (i == j) {
//           str += star
//         } else {
//           str += ' '
//         }
  
//         if (j == (n - i + 1)) {
//           str += hashtag
//         }
//         j++
//       }
//       str += '\n'
//       i++
//     }
//     return str
//   }
//   let test = diagonal(7)
//   console.log(test)

// const x = (n) =>{
//     let str =''
//     let star ='*'
//     let hashtag ='#'

//     for (let i = 1; i <=n; i++) {
//        for (let j = 1; j <=n; j++) {
//             if(i==j){
//                 str += star
//             }else{
//                 str += ' '
//             }
//             if (j == (n - i+1)) {
//                 str += hashtag
//             }
//        }
//        str += '\n'
//     }
//     return str
// }
// console.log(x(5))

// let n = 6
// let concat =' '
// let angka ='*'
// let tag ='#'
// for (let i = 0; i <=n; i++) {
//    for (let j = 0; j <=n; j++) {
//     if(i==j){
//        concat = angka
//     }else{
//     concat = ' '
//     }
//     if (j == (n - i+1)) {
//         concat = tag
//      }
//    }
//   console.log(concat)
//   concat=" "
// }

// segitiga terbalik
// let n1 = 6
// let concat1 =' '
// for (let i = n1; i > 0; i--) {
//     let angka1 = (`${String.fromCharCode(65 + (n1 - i ))}${concat1}`)
//     concat1 = concat1.repeat(n1-i) + angka1.repeat(i)
//     console.log(concat1)
//     concat1=" "
// }

// let n = 'a'
// let concat =' '
// if( n <= 26){
// for (let i = 1; i <= n; i++) {
//   let angka = (`${String.fromCharCode(64 + i)}${concat}`)
//   concat= concat.repeat(n-i) + angka.repeat(i)
//   console.log(concat)
//   concat=" "
//   }
// }else{
//   console.log ("Masukkan Rentang Angka 1 - 26")
// }

let str =''
let s = '*'
let h ='#'
let n =8

for (let i = 1; i <=n; i++) {
  for (let j = 1; j <=n; j++) {
    
    
  }
  str=''
}


