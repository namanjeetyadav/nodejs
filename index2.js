// Challenge
// 1. Create a folder name CRUD
// 2. Create a file in it named bio.txt and data into it.
// 3. Add more data into the file at the end of the existing data
// 4. Read the data without getting the buffer data at first 
// 5. Rename the file to mybio.txt
// 6. Now delete both file and folder

const fs = require("fs");
// fs.mkdirSync("CRUD");

fs.writeFileSync("crud/bio.txt", "Hello")

fs.appendFileSync("crud/bio.txt", " my name is Naman Jeet Yadav")

const data = readFileSync("crud/bio.txt");
console.log(data)