const chalk = require("chalk");
const validator = require("validator")

// console.log(chalk.blue.bold("Hello"))

const result = validator.isEmail("naman@gmail.com")
const result2 = validator.isStrongPassword("Naman#20")

// console.log(res);
console.log(result ? chalk.green.inverse(result) : chalk.red.inverse(result));


