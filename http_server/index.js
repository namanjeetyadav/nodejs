const http = require("http")

const server = http.createServer((req, res) => {
   if(req.url == "/"){
   res.end("Welcome from HOME")
   }
   else if (req.url == "/about"){
    res.end("Welcome from ABOUT")
   }
   else if (req.url == "/contact"){
    res.end("Welcome from CONTACT")
   }
   else {
    res.writeHead(404, {"Content-type" : "text-html"});
    res.end("<h1>404 Page Not Found</h1>")
   }


});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to server port no 8000");
})
