const express = require("express");
const app = express();
let PORT = 5000;

app.get("/", (req, res) => {
    res.send("I am a server")
});

const start = async () => {
    try {
        app.listen(5000, () => {
            console.log(`I am live in port 5000 ${PORT}`)
        });
    }catch (error) {}
};

start()