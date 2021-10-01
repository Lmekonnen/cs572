const fs=require("fs");
console.log("Going to get a file");
console.log("1:get file");
fs.readFile("shortFile.txt",function(err,file){
    console.log("2:gott he file");
});

console.log("3:end app");