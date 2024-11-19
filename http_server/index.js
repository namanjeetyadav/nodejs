const http = require("http")
const server = http.createServer((req, res) => {
    res.end("Hello from the other side naman.")
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to server port no 8000");
})
