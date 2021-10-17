const promise1 = new Promise((resolve,reject) =>{
 let num=Math.random();
 setTimeout(()=>{
     if (num>0.5){
         resolve(num)
     }else{
         reject("promise1 failed");

     }
 },1000)
});
const promise2 = new Promise((resolve,reject) =>{
    let num=Math.random()+0.5;
    setTimeout(()=>{
        if (num>0.5){
            resolve(num)
        }else{
            reject("promise2 failed");
   
        }
    },5000)
   });
const promise3 = new Promise((resolve,reject) =>{
    let num=Math.random()-0.5;
    setTimeout(()=>{
        if (num>0.5){
            resolve(num)
        }else{
            reject("promise3 failed");
   
        }
    },3000)
   });
 //6412337134
   console.log("1-start");
   console.log("promise1",promise1);
   ///////////////////////////////////////////
promise1.then((value)=>{
    console.log("promise1 done",value);
    console.log("pro after",promise1);
}).catch((error)=>{
    console.log(("promise1 failed",error));
    console.log("pro after",promise1);
})
////////////////////////////////////////////////////
console.log("2-middle");
   console.log("promise2",promise2);
   promise2.then((value)=>{
       console.log("promise2 done",value);
       console.log("pro after",promise2);
   }).catch((error)=>{
       console.log(("promise2 failed",error));
       console.log("pro after",promise2);
   })
   ///////////////////////////////////////////////////////////////
   console.log("3-before end");
   console.log("promise3",promise3);
   promise3.then((value)=>{
       console.log("promise3 done",value);
       console.log("pro after",promise3);
   }).catch((error)=>{
       console.log(("promise3 failed",error));
       console.log("pro after",promise3);
   })
   console.log("end");
/////////////////////////////////////////////////////////////////////
// Promise.all([promise1,promise2,promise3]).then((value)=>{
//     console.log(("all passed",value));
// }).catch((error)=>{
//     console.log("all error",error);
// })
///////////////////////////////////////////////////////////////////////
// Promise.race([promise1,promise2,promise3]).then((value)=>{
//     console.log(("race passed",value));
// }).catch((error)=>{
//     console.log("race error",error);
// })