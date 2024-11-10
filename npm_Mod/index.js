const chalk = require("chalk");
const validator = require("validator")

// console.log(chalk.blue.bold("Hello"))

const res = validator.isEmail("naman@gmail.com")

// console.log(res);
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));