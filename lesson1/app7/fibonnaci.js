// const fib=function(number){
//     if (number<=2){
//         return 1;
//     }else{
//         return fib(number-1)+fib(number-2);
//     }
// }
// // module.export={
// //     fib:fib
// // }
// console.log("fib ",fib(24));
const fib = function(num){
    let n=num;
    if(n<0){
        n=n*(-1);
    }
    if(n<=1){
        return n;
    }
    return fib(n-1)+fib(n-2);
  }
  
  module.exports = fib;
  console.log("fibonacci of -15 is: ",fib(-15));
  console.log("fibonacci of 30 is: ",fib(30));