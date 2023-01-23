// Try dan Catch


// let result = add(10,20);
// console.log(result);

// try{
//     //code may cause error 
// } catch (error){
//     //code to handle error 
// }finally{
    // akan dijalankan tak peduli ada eror atau tidak
// }

// try{
//     let result = add(10,20);
// console.log(result);
//     } catch(e) {
//         console.log({name: e.name, message:e.message});
//     }
    // console.log('Bye');

const add=(x,y)=>x+y;
let result =0;
try{
    result=add(10,20);
    console.log(`try`, result)
    }
catch (e){
    console.log('catch: ', e.message);
}finally {
    console.log(`finally`,result);
}