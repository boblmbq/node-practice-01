const [operation, ...args] = process.argv.slice(2);
const numbers = args.map((number) => Number(number));

module.exports = {
  operation,
  numbers,
};