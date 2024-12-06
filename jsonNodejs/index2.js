const fs = require("fs")

const bioData = {
    name: "Naman",
    age: 20, 
    channel: "naman jeet shorts"
}

// Task 01 Convert the JS object to JSON
// Task 02 Add in another file
// Task 03 Read file
// Task 04 Again convert it into JS object 

const jsonData =  JSON.stringify(bioData);
fs.writeFile("json1.json", jsonData, (err)=>{
    console.log(jsonData)
console.log("Done")
});

fs.readFile("json1.json", "utf-8", (err, data)=>{
    const orgData = JSON.parse(data)
    
    console.log(orgData)
})


