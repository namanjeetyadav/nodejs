const fs = require("fs")
fs.writeFile("read.txt", "Today is awesome",
    (err)=>{
        console.log("File is created")
        console.log(err)
    }
)

// We pass them a function as an argument - a callback
// that gets called when task completes
// The callback has an argument that tells you whether the
// operation completed sucessfully.
// Now we need to say what to do when fs.writeFile has completed
// (even id it's nothing), and start checking for errors.

fs.appendFile("read.txt", "Please add this data to file", 
(err)=>{
    console.log("Data added succesfully");
});


fs.writeFile("read.txt", "Add this data using writeFile",
    (err)=>{
        console.log("Data added using write ")
    } 
);

