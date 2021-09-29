// module.exports =  function fibonacci(n) {
//     if (n === 1) {
//       return [0, 1];
//     } else {
//       var arr = fibonacci(n - 1);
//       arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
      
//       return arr;
      
//     }
    
//   };
  
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