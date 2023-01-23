/*
PURE FUNCTION
merupakan konsep dari pembuatan fungsi yang mengharuskan fungsi 
UNTUK TIDAK BERGANTUNG TERHADAP NILAI YANG BERADA DI LUAR FUNGSI ATAU PARAMETERNYA.
pure funtion juga DILARANG KERAS UNTUK MENGUBAH NILAI YANG BERADA DI LUAR BAIK SECARA SENGAJA ATAU TIDAK SENGAJA.
lawan dari pure funtion adalah impure function
*/


//Impure Funtion
let PI=3.14;
const hitungLuasLingkaran = (jariJari)=>{
    return PI*(jariJari*jariJari);
}
console.log(hitungLuasLingkaran(4));


//Pure Function
const hitungLuasLingkaran1 = (jariJari) => {
    return 3.14 * (jariJari * jariJari); 
  }
  console.log(hitungLuasLingkaran(4)); // 50.24
//   console.log(hitungLuasLingkaran(4)); // 50.24
//   console.log(hitungLuasLingkaran(8)); // 200.96
//   console.log(hitungLuasLingkaran(8)); // 200.96


//Impure
const createPersonWithAge  = (age, person)=>
{
    person.age=age;
    return person;
};
const person=
{name1 : 'Bobo'};
const newPerson= createPersonWithAge(18,person);
console.log({person,newPerson});    
/**
 * Output:
 *  {
      person: { name: 'Bobo', age: 18 },
      newPerson: { name: 'Bobo', age: 18 }
    }
*/

//Pure function
const createPersonWithAgePure = (age, person) => {
    return { ...personPure, age };
  };
  const personPure = {
    name: 'Bobo'
  };
  
  const newPersonPure = createPersonWithAgePure(18, personPure);
  
  console.log({
    personPure,
    newPersonPure
  });
  
  /**
   * Output:
   *  { 
   *    person: { name: 'Bobo' },
   *    newPerson: { name: 'Bobo', age: 18 } 
   *  }
  */
  