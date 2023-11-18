// node calc.js sum 1 2 3
// node calc.js sub 2 1 1
// node calc.js mult 2 2 2
// node calc.js div 9 3 3

// const data = process.argv.slice(2);
const [operation, ...args] = process.argv.slice(2);
const numbers = args.map((number) => Number(number));

function mathOperations(operation, numbersArr) {
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

const result = mathOperations(operation, numbers)
console.log(result)








// [1,2,3,4].reduce((acc, elem, index, numbersArr)=> {}, 0)