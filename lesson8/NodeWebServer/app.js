const http = require("http");
const fs = require('fs');
const url = require('url');
var server = http.createServer(function(req,res){
    console.log(req.method,req.url);

    let query = url.parse(req.url,true).query;
    let queryValue = parseInt(query.page);
    let pathname = url.parse(req.url).pathname;

    if(pathname =='/index.html'){
        if(queryValue==1){
            fs.createReadStream("page1.html").pipe(res);
        }else if(queryValue==2){
            fs.createReadStream("page2.html").pipe(res);
        }else if(queryValue==3){
            fs.createReadStream("page3.html").pipe(res);
        }
    }
    else if(req.url=='/page1.html'){
        fs.createReadStream("page1.html").pipe(res);
    }
    else if (req.url=='/page2.html'){
        fs.createReadStream("page2.html").pipe(res);
    }
    else if (req.url=='/page3.html'){
        fs.createReadStream("page3.html").pipe(res);
    }else{
        res.end();
    }
});
server.listen(5353,function(){
    console.log("Server is running on port", server.address().port);
});