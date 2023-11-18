const calc = require("./Calculator");
console.log("hello from OOPStatic");
const [operation, ...args] = process.argv.slice(2);
const numbers = args.map((number) => Number(number));


const result = calc.init(operation, numbers);

console.log(result);
