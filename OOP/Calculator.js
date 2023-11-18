class Calculator {
  constructor(operation, numbers) {
    this.operation = operation;
    this.numbers = numbers;
  }

  init() {
    return this.mathOperations(this.operation, this.numbers);
  }

  mathOperations(operation, numbersArr) {
    switch (operation) {
      case "sum":
        return numbersArr.reduce((acc, number) => acc + number);
      case "sub":
        return numbersArr.reduce((acc, number) => acc - number);
      case "mult":
        return numbersArr.reduce((acc, number) => acc * number);
      case "div":
        return numbersArr.reduce((acc, number) => acc / number);

      default:
        return "unknown operation type";
    }
  }
}

const [operation, ...args] = process.argv.slice(2);
const numbers = args.map((number) => Number(number));

module.exports = new Calculator(operation, numbers);
