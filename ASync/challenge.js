// // Challenge
// 1. Create a folder name it NAMAN
// 2. Create a file in it named bio.txt and data into it.
// 3. Add more data into the file at the end of the existing data
// 4. Read the data without getting the buffer data at first 
// file encoding
// 5. Rename the file to mybio.txt
// 6. Now delete both file and folder


const fs = require("fs")

// fs.mkdir("Bio", (err)=>{
//     console.log(err);
// })
// fs.writeFile("./Bio/bio.txt", "Creating the file ", (err)=>{
//     console.log(err)
// })

// fs.appendFile("./Bio/bio.txt", "Adding more data using Async appendFile with harsh", (err)=>{
//     console.log(err)
// })

// const data = fs.readFile("./Bio/bio.txt", "UTF-8", (err, data)=>{
//     console.log(data)
// })

// fs.rename("./Bio/bio.txt", "./Bio/mybio.txt", (err)=>{
//     console.log("rename done");
// })

// To delete file 
// fs.unlink("./Bio/mybio.txt", (err)=>{
//   console.log("File deleted successfully")
// })

// To delete directory 
// fs.rmdir("./Bio", ()=>{
//     console.log("Directory delected succcessfully")
// })
