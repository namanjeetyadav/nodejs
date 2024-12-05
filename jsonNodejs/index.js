const bioData = {
    name: "naman",
    age: 20,
    channel: "naman jeet shorts"
}

// This line of code converts the javascript object to JSON

const jsonData =  JSON.stringify(bioData);
console.log(jsonData)

// This line of code converts the JSON to javascript object 

const objData =  JSON.parse(jsonData)
console.log(objData);