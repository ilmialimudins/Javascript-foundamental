/*
Array Reduce
array.reduce() 
adalah fungsi bawaan dari data yang bertipe yang digunakan untuk mengeksekusi fungsi reducer pada setiap elemen
array dan hanya mengembalikan output satu nilai saja.
*/

// arr.reduce(callback(accumulator,currentValue,[currentIndex],[array]),[initialValaue]);

/*
callback function dari fungsi ini dapat diolah untuk manipulasi dari currentValue dan menyimpanya pada accumulator
selain itu, fungsi reduce juga memiliki nilai awal yang didefinisikan pada bagian initialValue.
*/

const students = [
    {
      name: 'Harry',
      score: 90,
    },
    {
      name: 'James',
      score: 100,
    },
    {
      name: 'Ron',
      score: 100,
    },
    {
      name: 'Bethy',
      score: 100,
    }
  ];

  const totalScore= students.reduce((acc, nilai)=>acc+nilai.score,0);
  console.log(totalScore);