// server creation code 
const http = require('http');
const fs =  require('fs');
const filedata = fs.readFileSync('second.html');

const server = http.createServer((req,res) =>{

    res.writeHead(200,{'Content-type':'text/html'});
    res.end(filedata)
})
server.listen(80,'127.0.0.1',() => {
    console.log(" listening on port 80");
})

