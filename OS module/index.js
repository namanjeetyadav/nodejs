const os = require("os")

console.log(os.arch());  //Print the architecture 
console.log(os.hostname()); //Print the hostname 
console.log(os.platform())   //Print the platform
console.log(os.tmpdir());  //Print the temprary directory
console.log(os.type());  //Print the type

const freeMemory = os.freemem();
console.log(freeMemory/1024/1024/1024);

const totalMemory = os.totalmem();
console.log(totalMemory/1024/1024/1024)