const fs=require("fs");
const onFileLoad=function(err,file){  //named function
    console.log("2:gott he file")
}

console.log("1:get file");
fs.readFile("shortFile.txt",onFileLoad)
console.log("3:end app");