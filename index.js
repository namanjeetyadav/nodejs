const fs = require("fs")

fs.writeFileSync("Read me.txt", "Creating file using core modules")
fs.writeFileSync("Read me.txt", "Modifying the file data")

fs.appendFileSync("Read me.txt", "\nAdd data using append File Sync")

const buf_data = fs.readFileSync("Read me and write.txt")
org_data =  buf_data.toString()
console.log(buf_data);
console.log(org_data);
// Rename file 
fs.renameSync("Read me.txt", "Read me and write.txt")


// console.log("printing ")