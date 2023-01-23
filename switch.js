// let weight =100;
// let height =1.72;

// // let bmi= weight/ (height*height);
// let bmi= weight/ (height*height);
// let weightStatus;

// switch (true ){
//     case bmi <=18.5:
//     weightStatus=`Underweight`;
//     break;
//     case bmi >= 18.5 && bmi <= 24.9:
//     weightStatus = `Healthy Weight`;
//     break;
//     case bmi >= 25 :
//     weightStatus= ` Over Weight`;
//     break;
//     default:
//     break;
// } 
// console.log(weightStatus);

// let day = 3
// let dayName;
// switch(day){
//     case 1: 
//     dayName=`Sunday`;
//     break;
//     case 2:
//     dayName=`Monday`;
//     break;
//     case 3: 
//     dayName=`Tuesday`;
//     break;
//     case 4:
//     dayName=`Wednesday`;
//     break;
//     case 5: 
//     dayName=`Thurday`;
//     break;
//     case 6:
//     dayName=`Friday`;
//     break;
//     case 7:
//     dayName=`Saturday`;
//     break;
//     default:
        // dayName=`Invalid day`;
// }
// console.log(dayName);

let year =2016;
let month=2;
let dayCount;

switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dayCount=31;
        break;
        case 4:
        case 6:
        case 9:
        case 11:
        dayCount=30;
        break;
        case 2:
        //leap year
        if((year % 4==0 && !(year%100==0))|| year % 400==0){
            dayCount =29;
        }else {
            dayCount=29;
        }
        break;
        default:
            dayCount=-1;// invalid month
    
}
console.log(dayCount);