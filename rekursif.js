// const countDown = start => {
//   do {
//     console.log(start);
//     start -=1;
//   }
//   while(start > 0);
// };
 
// countDown(10);
// Maka, bentuk rekursinya adalah sebagai berikut:
const countDown = start => {
  console.log(start);
  if(start > 0) countDown(start-1);
};

countDown(10);
//Dengan teknik rekursif ini, kita sebenarnya bisa menggantikan operasi iterasi dengan rekursi. 
//Namun tidak sebatas itu saja, dengan rekursi kita dapat membuat dan mengolah data structures seperti Tree dan Array.
