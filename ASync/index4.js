// Synchronous vs Asynchronous

const fs = require("fs")

// Synchronous
// const data = fs.readFileSync("read.txt", "UTF-8")
// console.log(data);
// console.log("after the readFile sync")

// Asynchronous
const data = fs.readFile("read.txt", "UTF-8", (err, data)=>{
  console.log(data)
})

console.log("after the readFile async ")