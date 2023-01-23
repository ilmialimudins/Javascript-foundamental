/*
), find akan menghasilkan satu nilai dari elemen yang pertama kali ditemukan 
berdasarkan kriteria tertentu dan akan menghasilkan nilai undefine
 bila tidak ada kriteria yang terpenuhi pada item array.
 rumus:

 arr.find(callback(element, [index], [array]), [thisArg]);
 
// [...] adalah opsional parameter
*/
const students = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];

  const findName= students.find(students=> students.name==='James');    
  console.log(findName);