const fs = require("fs")
fs.writeFile("read.txt", "Today is awesome",
    (err)=>{
        console.log("File is created")
        console.log(err)
    }
)