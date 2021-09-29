const child_process=require("child_process");
console.log("1:start");
const newProcess=child_process.spawn("node",["fibonnaci.js"],{stdio:"inherit"})
// const fib=require("./fibonnaci");
// setTimeout(function(){
//     console.log("message 1");
//     console.log("fib of 10 is: ",fib.fib(10));
// },1000);
// setTimeout(function(){
//     console.log("message 1");
//     console.log("fib of 10 is: ",fib.fib(10));
// },1000);
console.log("2:end")