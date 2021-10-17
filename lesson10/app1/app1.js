const myFunction=function(a,b,f){
    // console.log("a+b",a+b);
console.log("saving to db",a);
console.log("saving to document",b);
console.log("saving in process");
setTimeout(f,2000)
    // f()
}
const myCallback=function(){
    console.log("callback");
}
myFunction("menaGames",4,myCallback)
//callback function caling function