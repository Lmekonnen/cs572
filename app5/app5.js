const fs=require("fs");
console.log("1:get file");
fs.readFile("shortFile.txt",function(err,file){
    console.log("2:gott he file");
});

console.log("3:end app");