//Questio 3:
// if…else conditional statement,  a program that will help Bolatito determine the subjects she will be taking

let scienceSubjects = 'Physics, Chemistry, Biology, Technical Drawing';
let socialScienceSubjects = ' Accounting, Commerce, Marketing, Geography';
let artsSubjects = 'Government, Economics, Literature, History';
let generalSubjects = 'English, Mathematics';
let classGroup = artsSubjects; 

if (classGroup == scienceSubjects) {
    console.log( scienceSubjects +', '+ generalSubjects);
} else if ( classGroup == socialScienceSubjects) {
    console.log( socialScienceSubjects +', '+ generalSubjects);
} else if ( classGroup == artsSubjects ) {
    console.log(  artsSubjects +', '+ generalSubjects);
} else if ( classGroup == '') {
    console.log( generalSubjects);
} else  {
    console.log(generalSubjects);
}

//Question 5
// the power of 2 nearest to that number. 

let num = 1;
while ( num < 50) {
    num++;

 
}

 let pwr = 1;
   while(pwr < num){
      if(num - pwr < Math.floor(pwr/ 2)){
         return pwr;
      };
      pwr *= 2;
   };

console.log('The number' +pwr +'is the power of 2 nearest to'+ num);
