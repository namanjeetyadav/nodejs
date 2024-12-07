const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("Welcome from HOME")
    }
    else if (req.url == "/about") {
        res.end("Welcome from ABOUT")
    }
    else if (req.url == "/contact") {
        res.end("Welcome from CONTACT")
    }
    else if (req.url == "/userapi") {
        fs.readFile(`${__dirname}/userApi/userApi.json`, "utf-8", (err, data)=>{
            console.log(data)

        })
        res.end("Hello from user API side")
    }
    else {
        res.writeHead(404, { "Content-type": "text-html" });
        res.end('<h1 style="color: Grey;"> 404 Page Not Found</h1>')
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to server port no 8000");
})
