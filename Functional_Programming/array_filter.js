/*
Array Filter
fungsi array.filter()
merupakan bawaan dari data yang bertipe array di javasrcipt.
fungsi ini berguna untuk melkukan proses penyaringan(filtering) terhadap nilai array yang ada.
cara kerja nya mirip seperti array.map() namun, callback fungsi ini harus mengembalikan boolean.
dimana nilai bolean ini digunakan untuk menentukan apakah array lolos saring atau tidak
*/

const truthyArray=[1,'','Hallo',0,null,'Hary',14].filter((item)=> Boolean(item));
console.log(truthyArray);

const students=[{
    name:'Harry',
    score:60
},
{
name:'Ilmi',
score:91
},
{name :'faqih',
score:88
},{
  name:'rifki',
  score:88
}
];

const beasiswaMurid= students.filter( (murid)=>murid.score>85);
console.log(beasiswaMurid);