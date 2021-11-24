const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    if(url === "/"){
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>Your are at INDEX Page</h2>")
    }else if(url === "/about"){
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>Your are at ABOUT Page</h2>")
    }else if(url === "/contact"){
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>Your are at CONTACT Page</h2>")
    }else{
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h2>404 WHAT THE HELL ARE YOU DOING HERE 404</h2>")
    }
    res.end();
});

const port = 5000

server.listen(port,()=> {
    console.log(`Server is running on ${port} port`)
})