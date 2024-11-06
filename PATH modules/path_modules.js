const path = require("path")

// console.log(path.dirname("D:/VS code offline/nodejs/PATH modules/path_modules.js"));
// console.log(path.extname("D:/VS code offline/nodejs/PATH modules/path_modules.js"));
// console.log(path.basename("D:VS code offline/nodejs/PATH modules/path_modules.js"));


// console.log(path.parse("D:/VS code offline/nodejs/PATH modules/path_modules.js"))

const myPath = path.parse("D:/VS code offline/nodejs/PATH modules/path_modules.js");

console.log(myPath.name);  //from the object it give properties individually
console.log(myPath.ext);
console.log(myPath.root)



